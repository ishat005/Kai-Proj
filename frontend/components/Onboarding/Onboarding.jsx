import { Box, Typography } from "@mui/material";
import React from "react";

const Onboarding = () => {
  return (
    <div
      className="onboarding"
      style={{ display: "flex", justifyContent: "center", height: "100vh" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        marginTop="-10vh"
      >
        <Typography>
          <h1 style={{ color: "#fff", fontWeight: 700, fontSize: "40px", lineHeight: "54px", fontFamily: "Satoshi"}}>
            Welcome to <span style={{ color: "#8653FF", fontWeight: 700, fontSize: "40px", lineHeight: "54px", fontFamily: "Satoshi" }}>Kai👋</span>
          </h1>
          <p
            style={{ display: "flex", justifyContent: "center", color: "#fff", fontWeight: 400, fontSize: "24px", lineHeight: "32.4px", fontFamily: "Satoshi" }}
          >
            Let's get started!
          </p>
        </Typography>
        <button
          style={{
            marginTop: "40px",
            color: "#fff",
            backgroundColor: "#8653FF",
            border: "none",
            padding: "12px, 155px, 12px, 155px",
            borderRadius: "26.89px",
            cursor: "pointer",
            width: "331px",
            height: "51px",
            fontWeight: "bold",
            gap: "10px"
          }}
        >
          Start here!
        </button>
      </Box>
    </div>
  );
};

export default Onboarding;
