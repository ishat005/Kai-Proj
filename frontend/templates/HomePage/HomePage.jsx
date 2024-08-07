import { Grid, Typography, IconButton, Collapse, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ToolsListingContainer from "@/components/ToolsListingContainer";

import styles from "./styles";

import { Snackbar } from "@mui/material";

import { AuthContext } from "@/providers/GlobalProvider";
import { useContext, useState } from 'react';
import { auth } from '@/redux/store';
import ALERT_COLORS from "@/constants/notification";


const HomePage = (props) => {
  const { data, loading, handleClose, message, severity } = props;
  const { handleOpenSnackBar } = useContext(AuthContext);
  const [open, SetOpen] = useState(true);

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
                sx={{background: '#dfc5fe', border: '1.5px solid #6960Ec', width: '120%'}}
          >
                <Typography {...styles.loginGridProps}> 
                    Login Successful!
                    <Typography {...styles.loginSubtitleProps}> 
                      👋Welcome Back!
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