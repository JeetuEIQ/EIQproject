import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
import { Header } from "../header/Header";


export const ForgotPassword = () => {
    const [validation, setValidation] = useState({
        email: false,
        password: false,
      });
  return (
    <>
      <Box
        bgcolor={"white"}
        minHeight={"100vh"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box width={"90%"} display={"flex"} flexDirection={"column"} gap={10}>
        <Header/>
          {/* Body */}
          <Box
            height={"70%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            {/* Form */}
            <form action="/" style={{ height: "80%", width: "35%" }}>
              <Box
                height={"100%"}
                width={"100%"}
                bgcolor={"#30303a"}
                display={"flex"}
                flexDirection={"column"}
                gap={2}
              >
                {/* Top */}
                <Box
                  width={"100%"}
                  height={"10%"}
                  display={"flex"}
                  justifyContent={"center"}
                  color={"white"}
                >
                  <Typography variant="h4">Reset Password</Typography>
                </Box>
                {/* Mid */}
                <Box
                  height={"75%"}
                  paddingLeft="5%"
                  width={"95%"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                >
                  <Box display={"flex"} gap={4}>
                    <Typography color={"white"}>
                      Remember your password?
                    </Typography>
                    <Link
                      to={"/"}
                      style={{ textDecoration: "none", color: "#ffeb0a" }}
                    >
                      Sign In
                    </Link>
                  </Box>
                  {/* Text Fields */}
                  <Box
                    width={"95%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    color={"white"}
                    gap={1}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"left"}
                      width={"100%"}
                    >
                      <label htmlFor="">Email</label>
                    </Box>
                    <TextField
                      style={{ background: "white", width: "100%" }}
                      placeholder="Email"
                      //   onChange={(e) =>
                      //     setLoginDetails({
                      //       ...loginDetails,
                      //       email: e.target.value,
                      //     })
                      //   }
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment>
                            <IconButton>
                              <MailOutlineIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    ></TextField>
                    <span
                      style={{
                        visibility: `${
                          validation.email == true ? "visible" : "hidden"
                        }`,
                        color: "red",
                      }}
                    >
                      *Enter valid email
                    </span>
                  </Box>
                </Box>
                {/* Bottom */}
                <Box
                  height={"15%"}
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Button
                    sx={{ width: "95%", background: "#ffeb0a", color: "black" }}
                    variant="contained"
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};
