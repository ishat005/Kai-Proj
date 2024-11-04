import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Switch,
} from "@mui/material";
import { useState } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import styles from "./styles";

import ProgressBar from "@/components/Progressbar";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const SystemConfiguration = ({ setCurrentStep }) => {
  const [theme, setTheme] = useState("light");
  const bodyStyle = {
    body: {
      backgroundColor: theme === "dark" ? "#292B2F" : "#fff",
    },
  };

  const themeMode = createTheme({
    palette: {
      mode: theme,
    },
  });

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClick = () => {
    setCurrentStep(4);
  };

  const gridStyles = { ...styles.mainGridProps, ...bodyStyle.body };

  return (
    <ThemeProvider theme={themeMode}>
      <Grid sx={gridStyles}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "70px",
            position: "relative",
            top: "50px",
          }}
        >
          <ProgressBar currentStep={2} theme={theme} />
        </div>
        <Typography
          variant="h2"
          style={{
            ...styles.headingProps,
            color: theme === "light" ? "#000000" : styles.headingProps.color,
          }}
        >
          <h1>System Configurations</h1>
        </Typography>

        <Typography
          style={{
            ...styles.subHeadingProps,
            color: theme === "light" ? "#000000" : styles.headingProps.color,
          }}
        >
          We need some permissions to get you started
        </Typography>

        <div style={{ display: "block", margin: "auto", width: "30%" }}>
          <Table sx={{ marginTop: "50px", position: "relative", left: "50px" }}>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    color: theme === "light" ? "#000000" : "#FFFFFF",
                    paddingRight: "110px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Enable Email Notifications
                </TableCell>
                <TableCell>
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#8653FF",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#8653FF",
                        },
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    color: theme === "light" ? "#000000" : "#FFFFFF",
                    paddingRight: "110px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Enable Push Notifications
                </TableCell>
                <TableCell>
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#8653FF",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#8653FF",
                        },
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    color: theme === "light" ? "#000000" : "#FFFFFF",
                    paddingRight: "110px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Enable Reminders
                </TableCell>
                <TableCell>
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#8653FF",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#8653FF",
                        },
                    }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell
                  sx={{
                    color: theme === "light" ? "#000000" : "#FFFFFF",
                    paddingRight: "110px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    borderBottom: "none",
                  }}
                >
                  Theme Selection
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Switch
                    checked={theme === "dark"}
                    onChange={handleThemeChange}
                    icon={<LightMode />}
                    checkedIcon={<DarkMode />}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#8653FF",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#8653FF",
                        },
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <button style={{ ...styles.buttonProps }} onClick={handleClick}>
          Finish
        </button>
      </Grid>
    </ThemeProvider>
  );
};

export default SystemConfiguration;
