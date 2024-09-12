import React from "react";
import { Box, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import starIconOne from "../../assets/svg/Star_4.svg";
import starIconTwo from "../../assets/svg/Star_4.svg";
import starIconThree from "../../assets/svg/Star_4.svg";
import errorIcon from "../../assets/svg/_WarningAmberOutlined.svg";
import AppDisabled from "@/components/AppDisabled";
import { useMediaQuery } from "@mui/material";

const NetworkError = () => {
  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("laptop")
  );

  const renderPage = () => {
    return (
      <div
        style={{
          overflow: "hidden",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "white",
            overflow: "hidden",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: 1.1,
              letterSpacing: 1,
              paddingTop: "0rem",
              position: "relative",
              bottom: "45px",
              fontFamily: "Ethnocentric Regular",
              right: "40px",
            }}
          >
            <SvgIcon
              component={starIconOne}
              viewBox="-50 -20 140 10"
              sx={{
                position: "relative",
                right: "5px",
                top: "5px",
                width: "120px",
                height: "120px",
              }}
            />
            KAI.AI
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              mt: -7.5,
              fontWeight: 600,
              color: "primary.main",
              fontSize: "18px",
              color: "#AD83FF",
              fontFamily: "Satoshi Bold",
              marginLeft: "-2rem",
              paddingBottom: "2rem",
              position: "relative",
              bottom: "45px",
            }}
          >
            <SvgIcon
              component={starIconOne}
              viewBox="-60 -20 140 10"
              sx={{
                position: "relative",
                right: "0px",
                top: "0px",
                width: "80px",
                height: "80px",
              }}
            />
            AI teaching Assistant
          </Typography>

          <SvgIcon
            component={starIconThree}
            viewBox="0 40 240 10"
            sx={{
              position: "relative",
              left: "240px",
              top: "-20px",
              width: "160px",
              height: "160px",
            }}
          />
          <Box>
            <SvgIcon
              component={errorIcon}
              sx={{
                width: "100px",
                height: "100px",
                marginTop: "-95px",
                marginLeft: "1rem",
              }}
            />

            <Typography
              variant="h3"
              component="div"
              align="center"
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: "41px",
                position: "relative",
                bottom: "115px",
                marginLeft: "4rem",
              }}
            >
              <SvgIcon
                component={starIconOne}
                viewBox="-60 -20 140 10"
                sx={{
                  position: "relative",
                  right: "30px",
                  bottom: "115px",
                  width: "80px",
                  height: "80px",
                }}
              />
              Network Error
              <SvgIcon
                component={starIconTwo}
                viewBox="70 -130 140 390"
                sx={{
                  position: "relative",
                  left: "20px",
                  top: "90px",
                  width: "160px",
                  height: "160px",
                }}
              />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "20px",
                  marginTop: "10px",
                  marginRight: "4rem",
                }}
              >
                <p>Seems like there is a problem with your internet, try</p>
                <p>reconnecting and refresh the page to continue</p>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </div>
    );
  };

  return (
    <>
      {isTabletScreen && <AppDisabled />}
      {!isTabletScreen && renderPage()}
    </>
  );
};

export default NetworkError;
