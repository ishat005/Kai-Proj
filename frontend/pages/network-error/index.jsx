import React from "react";
import { Box, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import starIconOne from "../../assets/svg/Star_4.svg";
import starIconTwo from "../../assets/svg/Star_4.svg";
import starIconThree from "../../assets/svg/Star_4.svg";
import errorIcon from "../../assets/svg/_WarningAmberOutlined.svg";
import AppDisabled from "@/components/AppDisabled";
import { useMediaQuery } from "@mui/material";

const iconSize = "350px";
const secondIconSize = "400px";
const thirdIconSize = "180px";
const errorIconSize = "2000px";

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
              marginLeft: "2rem",
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
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            height: "100vh",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgIcon
            component={starIconOne}
            viewBox="-160 2 40 390"
            sx={{
              width: iconSize,
              height: iconSize,
              transform: "translate(-2px, -2px)",
              position: "relative",
              left: "160px",
              bottom: "50px",

              "@media (min-width: 1024px)": {
                position: "relative",
                left: "5%",
                transform: "translate(-5%, 10%)",
              },

              "@media (min-width: 1440px)": {
                position: "relative",
                left: "11%",
                transform: "translate(-15%, 10%)",
              },
            }}
          />
          <Typography
            variant="h3"
            component="div"
            align="center"
            sx={{
              color: "black",
              fontWeight: "bold",
              marginTop: "-23rem",
              marginBottom: "1rem",
              marginLeft: "200px",

              "@media (min-width: 1024px)": {
                position: "relative",
                top: "90%",
                left: "0%",
                transform: "translate(-50%, -50%)",
              },

              "@media (min-width: 1440px)": {
                position: "relative",
                top: "15%",
                left: "20%",
                transform: "translate(-40%, -50%)",
                marginLeft: "110px",
              },
            }}
          >
            <SvgIcon
              component={errorIcon}
              viewBox="0 -170 30 370"
              sx={{
                width: errorIconSize,
                height: errorIconSize,

                "@media (min-width: 1024px)": {
                  position: "absolute",
                  top: "-10%",
                  left: "34%",
                  transform: "translate(-45%, -50%)",
                },

                "@media (min-width: 1440px)": {
                  position: "absolute",
                  top: "70%",
                  left: "30%",
                  transform: "translate(-55%, -50%)",
                },
              }}
            />
            Network Error
            <SvgIcon
              component={starIconTwo}
              viewBox="70 -130 140 390"
              sx={{
                width: secondIconSize,
                height: secondIconSize,
                position: "relative",
                right: "30px",
                bottom: "10px",

                "@media (min-width: 1024px)": {
                  position: "relative",
                  top: "25%",
                  left: "60%",
                  transform: "translate(10%, -100%)",
                },

                "@media (min-width: 1440px)": {
                  position: "relative",
                  top: "55%",
                  left: "0%",
                  transform: "translate(-10%, 5%)",
                },
              }}
            />
            <SvgIcon
              component={starIconThree}
              viewBox="0 40 240 10"
              sx={{
                width: thirdIconSize,
                height: thirdIconSize,
                position: "absolute",
                top: "65%",
                left: "69.5%",
                transform: "translate(-50%, -50%)",

                "@media (min-width: 1024px)": {
                  position: "relative",
                  top: "-55%",
                  transform: "translate(-20%, -300%)",
                },

                "@media (min-width: 1440px)": {
                  position: "relative",
                  left: "-32%",
                  transform: "translate(-50%, 50%)",
                },
              }}
            />
            <Typography
              align="left"
              sx={{
                color: "black",
                marginLeft: "-5rem",
                marginTop: "1rem",

                "@media (min-width: 1024px)": {
                  position: "absolute",
                  top: "10%",
                  left: "0%",
                  transform: "translate(20%, -50%)",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },

                "@media (min-width: 1440px)": {
                  position: "absolute",
                  top: "102.5%",
                  left: "-10%",
                  transform: "translate(20%, -50%)",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              Seems like there is a problem with your internet, try <br />
            </Typography>
            <Typography
              align="left"
              sx={{
                color: "black",
                marginLeft: "-2rem",

                "@media (min-width: 1024px)": {
                  position: "absolute",
                  top: "18%",
                  left: "5%",
                  transform: "translate(20%, -50%)",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },

                "@media (min-width: 1440px)": {
                  position: "absolute",
                  top: "115%",
                  left: "-5%",
                  transform: "translate(20%, -50%)",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              reconnecting and refreshing the page.
            </Typography>
          </Typography>
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
