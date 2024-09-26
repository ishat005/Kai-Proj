import { Typography, Box, FormControl, InputLabel, Input } from "@mui/material";
import React from "react";

const SecondStep = () => {
  console.log("SecondStep component rendered");
  return (
    <>
      <Box>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          style={{ marginTop: "143px" }}
        >
          <h3
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "43.2px",
              fontFamily: "Satoshi",
            }}
          >
            Profile Setup
          </h3>
        </Typography>
        <p
          style={{
            color: "#fff",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "27px",
            fontFamily: "Satoshi",
            textAlign: "center",
            marginTop: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Get started by setting up your profile
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "44px",
            marginTop: "40px",
          }}
        >
          <label
            style={{
              width: "467px",
              textAlign: "center",
              padding: "0px 20px",
              height: "18px",
              color: "#fff",
            }}
          >
            Full Name
          </label>
          <label style={{ width: "467px", color: "#fff", padding: "0px 20px" }}>
            Occupation
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            style={{
              width: "294.5px",
              padding: "17px, 20px, 17px, 20px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginRight: "10px",
              marginTop: "10px",
              fontFamily: "Satoshi",
              color: "#BDBDBD",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
              paddingLeft: "1rem",
            }}
          />
          <input
            type="text"
            placeholder="Enter Occupation"
            style={{
              width: "294.5px",
              padding: "17px, 20px, 17px, 20px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginTop: "10px",
              fontFamily: "Satoshi",
              color: "#BDBDBD",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
              paddingLeft: "1rem",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "25px",
            marginLeft: "50px",
          }}
        >
          <label style={{ width: "613px", color: "#fff", padding: "0px 20px" }}>
            Social Links
          </label>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <input
            type="text"
            placeholder=" | Paste Link"
            style={{
              width: "613px",
              padding: "17px, 20px, 17px, 20px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginTop: "10px",
              marginLeft: "12px",
              paddingLeft: "1rem",
              color: "#BDBDBD",
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: "2rem",
          }}
        >
          <input
            type="text"
            placeholder=" | Paste Link"
            style={{
              width: "613px",
              padding: "17px, 20px, 17px, 20px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginTop: "10px",
              marginLeft: "12px",
              paddingLeft: "1rem",
              color: "#BDBDBD",
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: "2rem",
          }}
        >
          <input
            type="text"
            placeholder=" | Paste Link"
            style={{
              width: "613px",
              padding: "17px, 20px, 17px, 20px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginTop: "10px",
              marginLeft: "12px",
              paddingLeft: "1rem",
              color: "#BDBDBD",
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "25px",
            marginLeft: "50px",
          }}
        >
          <label style={{ width: "613px", color: "#fff", padding: "0px 20px" }}>
            Profile
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "2rem",
          }}
        >
          <input
            type="file"
            style={{
              width: "613px",
              padding: "17px, 20px, 17px, 20px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginTop: "10px",
              marginLeft: "12px",
              paddingLeft: "1rem",
              color: "#D7D7D7",
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "10px",
            marginLeft: "50px",
          }}
        >
          <label style={{ width: "613px", color: "#fff", padding: "0px 20px" }}>
            Bio
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: "50px",
          }}
        >
          <textarea
            placeholder="Introduce yourself in a few words"
            style={{
              width: "613px",
              padding: "17px, 40px, 17px, 40px",
              height: "97px",
              border: "1px soid #fff",
              borderRadius: "24px",
              marginTop: "10px",
              marginLeft: "12px",
              paddingLeft: "1rem",
              paddingTop: "1rem",
              color: "#BDBDBD",
              fontFamily: "Satoshi",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "20.62px",
              rows: "4",
              cols: "50",
            }}
          />
        </div>

        <div
          style={{
            width: "63%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
              fontFamily: "Satoshi",
              marginTop: "20px",
              color: "#444154",
            }}
          >
            Word Limit: <span style={{ color: "#FFFFFF" }}>200 Words</span>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: "50px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              width: "613px",
              padding: "10px, 155px, 10px, 155px",
              height: "52px",
              border: "1px soid #fff",
              borderRadius: "55px",
              marginTop: "10px",
              marginLeft: "12px",
              paddingLeft: "1rem",
              color: "#fff",
              backgroundColor: "#8653FF",
              fontFamily: "Satoshi",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18.33px",
            }}
          >
            Next
          </button>
        </div>
      </Box>
    </>
  );
};

export default SecondStep;
