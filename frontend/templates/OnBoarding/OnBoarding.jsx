import React from "react";
import { Grid, Typography, useTheeme } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import GradientOutlinedButton from "@/components/GradientOutlinedButton";

import styles from "./styles";
import { useTheme } from "@emotion/react";
import WelcomeScreen from "@/pages/welcomescreen";
import withLayoutRedirect from "@/hoc/onboarding/withLayoutRedirect";


const ProfileSetup = () => {
  return <div>ProfileSetup</div>;
};

const SystemConfiguration = () => {
  return <div>SystemConfiguration</div>;
};

const FinalSteps = () => {
  return <div>FinalSteps</div>;
};

const ONBOARDING_STEPS = {
  1: WelcomeScreen,
  2: ProfileSetup,
  3: SystemConfiguration,
  4: FinalSteps,
};

console.log("OnBoarding file loaded");

const OnBoarding = (props) => {
  const currentStep = 1;

  console.log("Current step:", currentStep);

  const OnboardingPage = ONBOARDING_STEPS[currentStep];

  return (
    <div className={styles.welcomeScreen}>
      {/* <OnboardingPage {...props} /> */}
      {/* {OnboardingPage} */}
      <withLayoutRedirect
        currentStep={currentStep}
        component={OnboardingPage}
      />
    </div>
  );
};

export default OnBoarding;
