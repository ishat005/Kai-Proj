import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Checkbox,
} from "@mui/material";

import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import ProgressBar from "@/components/Progressbar";

import { useState } from "react";
import styles from "./styles";

const FinalSteps = ({ setCurrentStep }) => {
  const handleClick = () => {
    setCurrentStep(5);
  };

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <Typography variant="h2" style={{ ...styles.headingProps }}>
        <h1>Final Steps</h1>
      </Typography>

      <Typography style={{ ...styles.subHeadingProps }}>
        We need some permissions to get you started
      </Typography>

      <div style={{ display: "block", margin: "auto" }}>
        <Table sx={{ marginTop: "50px", position: "relative", left: "60px" }}>
          <TableBody>
            <TableRow>
              <TableCell style={{ paddingRight: "375px", fontSize: "20px" }}>
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
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ paddingRight: "375px", fontSize: "20px" }}>
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
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell style={{ paddingRight: "375px", fontSize: "20px" }}>
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
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                sx={{ borderBottom: "none" }}
                style={{ fontSize: "20px" }}
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
                        background: "#8653FF",
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
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <button style={{ ...styles.buttonProps }} onClick={handleClick}>
        Continue
      </button>
    </Grid>
  );
};

export default FinalSteps;
