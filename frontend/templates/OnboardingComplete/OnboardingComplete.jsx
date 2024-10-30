import { Grid, Typography, Checkbox } from "@mui/material";

import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";

import styles from "./styles";

const OnboardingComplete = ({ onContinue }) => {
  return (
    <Grid {...styles.mainGridProps}>
      <Checkbox
        checked={true}
        disabled={true}
        checkedIcon={
          <CheckCircleTwoToneIcon
            sx={{
              color: "white",
              background: "#8065FF",
              borderRadius: "50%",
              height: "75px",
              width: "75px",
            }}
          />
        }
      />
      <Typography variant="h2" style={{ ...styles.headingProps }}>
        <h1>Onboarding Complete!</h1>
      </Typography>

      <Typography style={{ ...styles.subHeadingProps }}>
        Congrats! the onboarding is complete,
        <br />
        continue to go to homepage
      </Typography>

      <button style={{ ...styles.buttonProps }} onClick={onContinue}>
        Continue
      </button>
    </Grid>
  );
};

export default OnboardingComplete;
