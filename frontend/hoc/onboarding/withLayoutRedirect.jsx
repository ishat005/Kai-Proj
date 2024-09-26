import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import MainAppLayout from '@/layouts/MainAppLayout';

import AuthLayout from '@/layouts/AuthLayout';

import OnboardingLayout from '@/layouts/OnboardingLayout';

import ROUTES from '@/constants/routes';

const withLayoutRedirect = (PageComponent) => {
  return function WrappedComponent(props) {
    const router = useRouter();
    const { data: user, loading } = useSelector((state) => state.user);
    const [onboardingStatus, setOnboardingStatus] = useState({
      isComplete: false,
      nextStep: null,
    });

    useEffect(() => {
      const evaluateOnboardingStatus = (onboarding) => {
        if (!onboarding) return { isComplete: false, nextStep: 1 };
        const isComplete = Object.values(onboarding).every((step) => step);
        const nextStep =
          Object.values(onboarding).findIndex((step) => !step) + 1;
        return { isComplete, nextStep: isComplete ? null : nextStep };
      };

      if (!loading && user) {
        const onboardingStep = evaluateOnboardingStatus(user.onboarding);
        setOnboardingStatus(onboardingStep);

        if (!onboardingStep.isComplete) {
          const redirectRoutes = {
            1: ROUTES.WELCOME_ONBOARDING,
            2: ROUTES.PROFILE_SETUP,
            3: ROUTES.SYSTEM_CONFIGURATION,
            4: ROUTES.FINAL_STEPS,
            5: ROUTES.RESULT,
          };

          if (redirectRoutes[onboardingStep.nextStep]) {
            router.push(redirectRoutes[onboardingStep.nextStep]);
          }
        }
      }
    }, [user, loading, router]);

    const currentRoute = router.pathname;
    const isNonAuthPage = [
      ROUTES.SIGNIN,
      ROUTES.SIGNUP,
      ROUTES.PRIVACY,
      ROUTES.TERMS,
      ROUTES.PASSWORD_RESET,
    ].includes(currentRoute);

    // If this is a non-auth page, wrap around auth layout
    if (isNonAuthPage) {
      return <AuthLayout>{PageComponent}</AuthLayout>;
    }

    // If the user has not onboarded, render the onboarding page
    if (!onboardingStatus.isComplete) {
      return (
        <OnboardingLayout>
          <onboardingPage {...props} />
        </OnboardingLayout>
      );
    }

    // // If the request is a landing page, render the main app layout
    // if (isLandingPage) {
    //   return (
    //     <LandingPageLayout>
    //       <PageComponent {...props} />
    //     </LandingPageLayout>
    //   );
    // }

    return (
      <MainAppLayout>
        <PageComponent {...props} />
      </MainAppLayout>
    );
  };
};

export default withLayoutRedirect;