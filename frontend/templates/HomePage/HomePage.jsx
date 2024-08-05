import { Grid, Typography } from "@mui/material";

import ToolsListingContainer from "@/components/ToolsListingContainer";

import styles from "./styles";

// import { WATCH_FIELDS } from '../SignUp/SignUpForm/SignUpForm';
import { Alert, Snackbar } from "@mui/material";

import { AuthContext } from "@/providers/GlobalProvider";
import { useContext, useState } from 'react';
import { auth } from '@/redux/store';


const HomePage = (props) => {
  const { data, loading, open, handleClose, message, severity } = props;
  const { handleOpenSnackBar } = useContext(AuthContext);


  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>
          Welcome to{" "}
          <Typography {...styles.highlightTextProps}>Kai Tools</Typography> 👋
        </Typography>
        <Typography {...styles.subtitleProps}>
          Made for{" "}
          <Typography {...styles.highlightTextProps}>educators</Typography>
        </Typography>
      
        <Grid {...styles.LoginTitleProps} >
          <Typography> 
              Login Successful
                <Typography {...styles.LoginSubtitleProps}> 
                  {/* 👋Welcome Back! {`${WATCH_FIELD}`}  */}
                  👋Welcome Back!
                </Typography>
          </Typography> 
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderTitle()}
      <ToolsListingContainer
        data={data}
        loading={loading}
        category="All Tools"
      />
    </Grid>
  );
};
export default HomePage;
