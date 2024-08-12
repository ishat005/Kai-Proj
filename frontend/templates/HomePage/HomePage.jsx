import { Grid, Typography, IconButton, Collapse, Alert, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ToolsListingContainer from "@/components/ToolsListingContainer";
import styles from "./styles";
import { useState, useEffect } from 'react';
import { auth } from '@/redux/store';
import { firestore } from "../../../frontend/redux/store";
import { getDocs, collection } from "firebase/firestore";
import React from "react";

const HomePage = (props) => {
  const { data, loading } = props;
  const [open, SetOpen] = useState(true);
  const createdTimestamp = auth.currentUser.metadata.creationTime;
  const signInTimestamp  = auth.currentUser.metadata.lastSignInTime;

  const handleToClose = () => {
    SetOpen(false);
  };

  async function fetchDataFromFirestore(){
    const querySnapshot = await getDocs(collection(firestore, 'users'));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    })
    return data;
  }


  const renderTitle = () => {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const data = await fetchDataFromFirestore();
        setUserData(data);
      }
        fetchData();
    }, [])

    const retrievedName = '';
    userData.map((user) => {
      retrievedName = user.fullName;
    })

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

        <Grid>
          <Snackbar
              anchorOrigin= {{ horizontal: "right", vertical: "top",}}
              open={open}
              autoHideDuration={6000}
              onClose={handleToClose}
          >
              <Alert
                  sx={{
                    background:'#dfc5fe', 
                    border: '1.5px solid #6960Ec', 
                    width: '22%',  
                    borderRadius: '6px', 
                    marginTop: '2rem', 
                    marginRight: '2rem'
                  }}
                  icon={false}
                  action={
                    <React.Fragment>
                        <IconButton
                            size="small"
                            aria-label="close"
                            sx={{color:'black'}}
                            onClick={handleToClose}
                        >
                            <CloseIcon fontSize="small" color="black" />
                        </IconButton>
                    </React.Fragment>
                  }
               >
                  <Typography {...styles.loginGridProps}> 
                     {createdTimestamp !== signInTimestamp ? 'Log In Successful!' : 'Sign Up Successful!'}
                     <Typography {...styles.loginSubtitleProps}> 
                       {createdTimestamp !== signInTimestamp ? `👋Welcome Back! ${retrievedName}` : `👋Welcome to KAI! ${retrievedName}`}
                     </Typography>
                  </Typography>  
             </Alert>
          </Snackbar>
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
