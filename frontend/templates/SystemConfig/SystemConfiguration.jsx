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

const SystemConfiguration = ({ setCurrentStep }) => {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClick = () => {
    setCurrentStep(4);
  };

  return (
    <Grid {...styles.mainGridProps}>
      <ProgressBar />
      <Typography variant="h2" style={{ ...styles.headingProps }}>
        <h1>System Configurations</h1>
      </Typography>

      <Typography style={{ ...styles.subHeadingProps }}>
        We need some permissions to get you started
      </Typography>

      <div style={{ display: "block", margin: "auto" }}>
        <Table sx={{ marginTop: "50px", position: "relative", left: "20px" }}>
          <TableBody>
            <TableRow>
              <TableCell sx={{ paddingRight: "275px" }}>
                Enable Email Notifications
              </TableCell>
              <TableCell>
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#8653FF",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#8653FF",
                    },
                  }}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ paddingRight: "275px" }}>
                Enable Push Notifications
              </TableCell>
              <TableCell>
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#8653FF",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#8653FF",
                    },
                  }}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ paddingRight: "275px" }}>
                Enable Reminders
              </TableCell>
              <TableCell>
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#8653FF",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#8653FF",
                    },
                  }}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ borderBottom: "none", paddingRight: "275px" }}>
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
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
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
  );
};

export default SystemConfiguration;
