import React from "react";
import { Grid, Typography, useTheeme } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import GradientOutlinedButton from "@/components/GradientOutlinedButton";

import styles from "./styles";
import { useTheme } from "@emotion/react";

const ONBOARDING_STEPS = {
  1: WelcomeScreen,
  2: ProfileSetup,
  3: SystemConfiguration,
  4: FinalSteps,
};

const WelcomeScreen = (props) => {
  const user = useSelector((state) => state.user);

  const { currentStep } = useSelector((state) => state.onboardingStep);
  const [step, setSteps] = useState([
    {
      id: 1,
      title: "Welcome to Kai",
      description: "Let's get started",
      completed: false,
      button: {
        text: "Get Started",
        onClick: () => console.log("Button clicked"),
      },
    },
  ]);

  // const currentStep = 1;
  const onboardingPage = ONBOARDING_STEPS[currentStep];

  return (
    <div className={styles.welcomeScreen}>
      <onboardingPage.type
        title={
          <Typography variant="h2" className={styles.title}>
            Welcome to <span className={styles.kai}>Kai</span>
          </Typography>
        }
        description={
          <Typography className={styles.description}>
            {step[0].description}
          </Typography>
        }
        button={step[0].button}
        {...props}
      />
    </div>
  );
};

export default WelcomeScreen;
