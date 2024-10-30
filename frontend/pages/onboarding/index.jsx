import React, { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import Welcome from "@/templates/Welcome";
import ProfileSetup from "@/templates/ProfileSetup";
import SystemConfiguration from "@/templates/SystemConfig";
import FinalSteps from "@/templates/FinalSteps";
import OnboardingComplete from "@/templates/OnboardingComplete";

import ROUTES from "@/constants/routes";

const Onboarding = () => {
  const user = useSelector((state) => state.user.data);
  const router = useRouter();

  const calculateStep = useCallback((onboarding) => {
    if (!onboarding) return 1;
    const step =
      Object.values(onboarding).findIndex(
        (onboarding_step) => !onboarding_step
      ) + 1;
    return step > 0 ? step : Object.keys(onboarding).length + 1;
  }, []);

  const [currentStep, setCurrentStep] = useState(() =>
    calculateStep(user?.onboarding)
  );

  useEffect(() => {
    const newStep = calculateStep(user?.onboarding);
    setCurrentStep(newStep);
  }, [user, calculateStep]);

  const handleAdvanceOnboarding = useCallback(() => {
    setCurrentStep((prevStep) => {
      const newStep = prevStep + 1;
      const calculatedStep = calculateStep(user?.onboarding);
      return Math.max(newStep, calculatedStep);
    });
  }, [user, calculateStep]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Welcome
            user={user}
            onAdvance={handleAdvanceOnboarding}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return <ProfileSetup user={user} setCurrentStep={setCurrentStep} />;
      case 3:
        return (
          <SystemConfiguration user={user} setCurrentStep={setCurrentStep} />
        );
      case 4:
        return (
          <FinalSteps
            onAdvance={handleAdvanceOnboarding}
            setCurrentStep={setCurrentStep}
          />
        );
      case 5:
        return (
          <OnboardingComplete
            onContinue={() => {
              router.push(ROUTES.HOME);
            }}
          />
        );

      default:
        router.push(ROUTES.HOME);
        return null;
    }
  };

  return renderStep();
};

export default Onboarding;
