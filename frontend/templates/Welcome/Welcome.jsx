import { Grid, Typography } from "@mui/material";
import ProgressBar from "@/components/Progressbar";
import styles from "./styles";

const Welcome = ({ setCurrentStep }) => {
  const handleClick = () => {
    setCurrentStep(2);
  };

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <Typography variant="h2" {...styles.headingProps}>
        Welcome to <span style={styles.spanColor}>Kai</span>👋
      </Typography>

      <Typography {...styles.subHeadingProps}>Let's get started!</Typography>
      <button style={styles.buttonProps} onClick={handleClick}>
        Start Here!
      </button>
    </Grid>
  );
};

export default Welcome;
