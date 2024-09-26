import React, { useEffect } from "react";
import { useMediaQuery, Grid } from "@mui/material";
import AppDisabled from "@/components/AppDisabled";
import { useSelector } from "react-redux";
import Loader from "@/components/Loader";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/slices/authSlice";
import { Head } from "next/head";
import ProgressBarMenu from "../ProgressBarMenu/ProgressBarMenu";
import styles from "./styles";

const OnboardingLayout = ({ children, currentStep }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("laptop")
  );

  const isLoading = auth.loading || !user.data || !auth.data;

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const renderHead = () => {
    return (
      <Head>
        <title>Kai AI Onboarding</title>
      </Head>
    );
  };

  const renderOnboardingContent = () => {
    <>
      {/* <Grid item xs={12} sx={styles.headerContainer}> */}
      <Grid item xs={12}>
        <ProgressBarMenu activeStep={currentStep} />
      </Grid>
      {/* <Grid item xs={12} sx={styles.contentContainer}> */}
      <Grid item xs={12}>
        {children}
      </Grid>
    </>;
  };

  if (isTabletScreen) {
    return <AppDisabled head={renderHead()} />;
  }

  return (
    <Grid>
      {renderHead()}
      {!isTabletScreen && renderOnboardingContent()}
    </Grid>
  );
};

export default OnboardingLayout;
