import React, { useState, useRef } from "react";
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

import { Circle, Check } from "@mui/icons-material";

import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const TickIcon = () => {
  return (
    <Circle
      sx={{
        fontSize: 17,
        color: " #444154",
        border: "1px solid #8065FF",
        borderRadius: "50%",
        height: 21,
        width: 21,
      }}
    >
      <Check sx={{ fontSize: 18, color: "white", height: 21, width: 21 }} />
    </Circle>
  );
};

const ProgressBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const lastStepRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(lastStepRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stepper
        orientation="horizontal"
        connector={
          <div
            style={{
              width: 150,
              height: 8,
              backgroundColor: "#ccc",
              borderRadius: 5,
              marginLeft: "-10px",
              backgroundColor: "#444154",
            }}
          />
        }
        style={{ position: "relative", left: "55px" }}
      >
        <Step>
          <StepLabel StepIconComponent={TickIcon}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={TickIcon}></StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={TickIcon}></StepLabel>
        </Step>
        <Step ref={lastStepRef}>
          <StepLabel StepIconComponent={TickIcon}></StepLabel>
        </Step>
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
          top: 40,
          left: -550,

          "& .MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-nytw2n-MuiPaper-root-MuiMenu-paper-MuiPopover-paper":
            {
              width: "22%",
            },
        }}
      >
        <MenuItem onClick={handleClose}>
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
            sx={{
              marginRight: "20px",
            }}
          />
          Welcome
        </MenuItem>

        <MenuItem onClick={handleClose}>
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
            sx={{
              marginRight: "20px",
            }}
          />
          Profile Setup
        </MenuItem>

        <MenuItem onClick={handleClose}>
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
            sx={{
              marginRight: "20px",
            }}
          />
          System Configurations
        </MenuItem>

        <MenuItem onClick={handleClose}>
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
