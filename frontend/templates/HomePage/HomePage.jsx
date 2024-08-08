import { Grid, Typography, IconButton, Collapse, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ToolsListingContainer from "@/components/ToolsListingContainer";

import styles from "./styles";

import { useState } from 'react';
import { auth } from '@/redux/store';

const HomePage = (props) => {
  const { data, loading } = props;
  const [open, SetOpen] = useState(true);
  const createdTimestamp = auth.currentUser.metadata.creationTime;
  const signInTimestamp  = auth.currentUser.metadata.lastSignInTime

  console.log(createdTimestamp);
  console.log(signInTimestamp);

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
      
        <Grid {...styles.loginGridProps} >  
            <Collapse in={open}>
              <Alert 
                icon={false}
                action={<IconButton onClick={()=>(SetOpen(false))} sx={{color:'#404040'}}><CloseIcon></CloseIcon></IconButton>}
                variant="outlined"
                sx={{background: '#dfc5fe', border: '1.5px solid #6960Ec', width: '125%',  borderRadius: '6px'}}
              >           
                <Typography {...styles.loginGridProps}> 
                    {createdTimestamp !== signInTimestamp ? 'Log In Successful!' : 'Sign Up Successful!'}
                    <Typography {...styles.loginSubtitleProps}> 
                        {createdTimestamp !== signInTimestamp ? '👋Welcome Back!' : '👋Welcome to KAI!'}
                    </Typography>
                </Typography>    
              </Alert>
            </Collapse>
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