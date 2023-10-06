import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const HomeHeader = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <Box minHeight={"15%"}  minWidth={"100%"} bgcolor={"#333332"} display={"flex"}>
        {/* Left Part */}
        <Box
          minWidth={"15%"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          height={"100%"}
        >
          <img src="logo.png" alt="" height={"70%"} />
        </Box>

        {/* Right Part */}
        <Box
          width={"75%"}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          gap={6}
        >
          <Link to={"/overview"} style={{ textDecoration: "none" }}>
            <Typography
              color={"white"}
              textAlign={"center"}
              sx={{ ":hover": { textDecoration: "underline" } }}
              variant="subtitle"
            >
              Director <br />
              Master
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <Typography
              color={"white"}
              textAlign={"center"}
              sx={{ ":hover": { textDecoration: "underline" } }}
              variant="subtitle"
            >
              Family <br />
              Master
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <Typography
              color={"white"}
              textAlign={"center"}
              sx={{ ":hover": { textDecoration: "underline" } }}
              variant="subtitle"
            >
              Investment <br />
              Details
            </Typography>
          </Link>
          <Link to={"/director-form"} style={{ textDecoration: "none" }}>
            <Typography
              color={"white"}
              textAlign={"center"}
              sx={{ ":hover": { textDecoration: "underline" } }}
              variant="subtitle"
            >
              Director <br />
              Forms
            </Typography>
          </Link>
          <Link to={"/reporting"} style={{ textDecoration: "none" }}>
            <Typography
              color={"white"}
              textAlign={"center"}
              sx={{ ":hover": { textDecoration: "underline" } }}
              variant="subtitle"
            >
              Reporting
            </Typography>
          </Link>

          <Button
            variant="outlined"
            size="large"
            sx={{ borderColor: "white", color: "white" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </>
  );
};
