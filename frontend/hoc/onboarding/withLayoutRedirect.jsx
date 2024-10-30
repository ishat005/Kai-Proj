// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import { useState } from "react";
// import MainAppLayout from "@/layouts/MainAppLayout";
// import WelcomeScreen from "@/templates/OnBoarding/OnBoarding";

// const withLayoutRedirect = (PageComponent, props) => {
//   // const currentStep = props.currentStep;

//   return function WrappedComponent(props) {
//     // console.log("Received currentStep:", currentStep);
//     // console.log("Received currentStep:", props.currentStep);

//     console.log("Received props:", props);

//     const router = useRouter();
//     const [onboardingStatus, setOnboardingStatus] = useState({
//       isComplete: false,
//       nextStep: null,
//     });

//     const component = props.component;

//     if (!onboardingStatus.isComplete) {
//       console.log("Current step:", currentStep);
//       if (currentStep === 1) {
//         console.log("Rendering WelcomeScreen");
//         return <WelcomeScreen />;
//       } else {
//         console.log("Not rendering WelcomeScreen");
//         const redirectRoutes = {
//           2: router.PROFILE_SETUP,
//           3: router.SYSTEM_CONFIGURATION,
//           4: router.FINAL_STEPS,
//           5: router.RESULT,
//         };

//         if (redirectRoutes[currentStep]) {
//           router.push(redirectRoutes[currentStep]);
//           if (currentStep === 4) {
//             console.log("Onboarding completed");
//             setOnboardingStatus({
//               // isComplete: true, nextStep: null
//               ...onboardingStatus,
//               isComplete: true,
//             });
//           }
//         }
//       }
//       return (
//         <MainAppLayout>
//           <PageComponent {...props} />
//         </MainAppLayout>
//       );
//     }
//   };

//   return function EnhancedComponent() {
//     return <WrappedComponent {...props} />;
//   };
// };
// export default withLayoutRedirect;

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import MainAppLayout from "@/layouts/MainAppLayout";
import WelcomeScreen from "@/templates/OnBoarding/OnBoarding";

const withLayoutRedirect = (WrappedComponent) => {
  // console.log("Received props:", props);

  return function WrappedComponent(props) {
    const currentStep = props.currentStep || 1;
    const component = props.component;

    // const { currentStep, component: Component } = props;

    const router = useRouter();
    const [onboardingStatus, setOnboardingStatus] = useState({
      isComplete: false,
      nextStep: null,
    });

    if (!onboardingStatus.isComplete) {
      console.log("Current step:", currentStep);
      if (currentStep === 1) {
        console.log("Rendering WelcomeScreen");
        return <WelcomeScreen />;
      } else {
        console.log("Not rendering WelcomeScreen");
        const redirectRoutes = {
          2: router.PROFILE_SETUP,
          3: router.SYSTEM_CONFIGURATION,
          4: router.FINAL_STEPS,
          5: router.RESULT,
        };

        if (redirectRoutes[currentStep]) {
          router.push(redirectRoutes[currentStep]);
          if (currentStep === 4) {
            console.log("Onboarding completed");
            setOnboardingStatus({
              ...onboardingStatus,
              isComplete: true,
            });
          }
        }
      }
      return (
        <MainAppLayout>
          <WrappedComponent {...props} />
        </MainAppLayout>
      );
    }
  };
};

export default withLayoutRedirect;
