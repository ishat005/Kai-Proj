import React from "react";
import {
  Menu,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  Button,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Circle } from "@mui/icons-material";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const TickIcon = ({ index, currentStep }) => {
  if (index < currentStep) {
    return (
      <>
        <svg
          width="26"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12.3"
            cy="12.5"
            r="11.5"
            fill="#8065FF"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <path
            d="M7 12.5l3.5 3.5 6.5-6.5"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    );
  }
};

const ProgressBar = ({ currentStep, theme = "dark" }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const lastStepRef = React.useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        width: "650px",
        height: "55px",
        border: "1px solid #3D3F4E",
        borderRadius: "10px",
        padding: "12px 16px 12px 16px",
        position: "relative",
        left: "55px",
        borderImage: `linear-gradient(-90deg, #3D3F4E, #8653FF) 1`,
      }}
    >
      <Stepper
        orientation="horizontal"
        connector={
          <div
            style={{
              width: 150,
              height: 8,
              borderRadius: 5,
              marginLeft: "-10px",
              backgroundColor: theme === "dark" ? "#444154" : "#D4D4D7",
            }}
          />
        }
        style={{ position: "relative", left: "5px" }}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <Step key={index}>
            <StepLabel
              StepIconComponent={
                index === currentStep
                  ? () => (
                      <Circle
                        sx={{
                          stroke: "#8065FF",
                          strokeWidth: 2,
                          fill: theme === "dark" ? "#444154" : "#B4B4B4",
                        }}
                      />
                    )
                  : index < currentStep
                  ? () => <TickIcon index={index} currentStep={currentStep} />
                  : () => (
                      <Circle
                        sx={{
                          fill: theme === "dark" ? "#656277" : "#D6D6D6",
                          strokeWidth: 2,
                          stroke: theme === "dark" ? "#444154" : "#B4B4B4",
                        }}
                      />
                    )
              }
            ></StepLabel>
          </Step>
        ))}
        <Button
          aria-controls="custom-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <ArrowDropDownIcon />
        </Button>
      </Stepper>

      <Menu
        id="custom-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{
          paper:
            "MuiPaper-root MuiMenu-paper MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper css-nytw2n-MuiPaper-root-MuiMenu-paper-MuiPopover-paper",
        }}
        sx={{
          position: "absolute",
          top: 10,
          left: -574,

          "& .MuiMenuItem-root": {
            // backgroundColor: "#181A20",
            backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
          },

          "& .MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-nytw2n-MuiPaper-root-MuiMenu-paper-MuiPopover-paper":
            {
              width: "21.6%",
              borderRadius: "10px",
              border: "1px solid",
              borderImage: `linear-gradient(-90deg, #3D3F4E, #8653FF) 1`,
            },
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: theme === "dark" ? "#181A20" : "#FFFFFF",
            marginTop: "-10px",
          }}
        >
          <Checkbox
            icon={
              <RadioButtonUncheckedIcon
                sx={{
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  background: "#444154",
                  color: "#8065FF",
                }}
              />
            }
            checkedIcon={
              <CheckCircleTwoToneIcon
                sx={{
                  color: "white",
                  background: "#8065FF",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
            }
            checked={currentStep > 0}
            sx={{
              marginRight: "20px",
            }}
          />
          Welcome
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ borderTop: "1px solid #3D3F4E" }}>
          <Checkbox
            icon={
              <RadioButtonUncheckedIcon
                sx={{
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  background: "#444154",
                  color: "#8065FF",
                }}
              />
            }
            checkedIcon={
              <CheckCircleTwoToneIcon
                sx={{
                  color: "white",
                  background: "#8065FF",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
            }
            checked={currentStep > 1}
            sx={{
              marginRight: "20px",
            }}
          />
          Profile Setup
        </MenuItem>

        <MenuItem onClick={handleClose} sx={{ borderTop: "1px solid #3D3F4E" }}>
          <Checkbox
            icon={
              <RadioButtonUncheckedIcon
                sx={{
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  background: theme === "dark" ? "#444154" : "#D6D6D6",
                  color: theme === "dark" ? "#8065FF" : "#B4B4B4",
                }}
              />
            }
            checkedIcon={
              <CheckCircleTwoToneIcon
                sx={{
                  color: "white",
                  background: "#8065FF",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
            }
            checked={currentStep > 2}
            sx={{
              marginRight: "20px",
            }}
          />
          System Configurations
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            backgroundColor: "#181A20",
            marginBottom: "-10px",
            borderTop: "1px solid #3D3F4E",
          }}
        >
          <Checkbox
            icon={
              <RadioButtonUncheckedIcon
                sx={{
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  background: theme === "dark" ? "#444154" : "#D6D6D6",
                  color: theme === "dark" ? "#8065FF" : "#B4B4B4",
                }}
              />
            }
            checkedIcon={
              <CheckCircleTwoToneIcon
                sx={{
                  color: "white",
                  background: "#8065FF",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
            }
            checked={currentStep > 3}
            sx={{
              marginRight: "20px",
            }}
          />
          Final Steps
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProgressBar;
