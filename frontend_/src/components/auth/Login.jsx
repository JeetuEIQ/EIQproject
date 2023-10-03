import React, { useEffect, useState, } from "react";
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  FormGroup,
  Switch,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link,useNavigate } from "react-router-dom";
import { Header } from "../header/Header";


export const Login = () => {
    const [loginDetails,setLoginDetails]=useState({accountType:"",email:"a",password:""})
    const [validation,setValidation] = useState({email:false,password:false})

    const navigate=useNavigate();
    useEffect(()=>{

    },[validation.email])

    const handleLogin=(e)=>{
        e.preventDefault();
        const emailPattern= new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
        if(!emailPattern.test(loginDetails.email)||loginDetails.email==""){
            console.log("yes");
            setValidation({email:true})
            return
        }
        // setValidation({...validation,email:false})
        if(loginDetails.password==""){
            setValidation({password:true})
            return
        }
        setValidation({password:false})
        navigate("/home")
    }
    const handleOTP=(e)=>{
        
    }

  return (
    <>
      {/* container */}
      <Box
        bgcolor={"white"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box width={"90%"} display={"flex"} flexDirection={"column"} gap={16}>
          {/* Header */}
          <Header/>
          {/* Body */}
          <Box
            height={"63%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            {/* Form */}
            <form action="/" style={{ height: "100%", width: "70%" }}>
              <Box
                height={"100%"}
                width={"100%"}
                bgcolor={"#30303a"}
                display={"flex"}
              >
                {/* Left Dide */}
                <Box
                  height={"100%"}
                  width={"45%"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  {/* Top */}
                  <Box
                    height={"75%"}
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                  >
                    {/* Account Type */}
                    <Box
                      width={"100%"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      color={"white"}
                      paddingBottom={"15px"}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"left"}
                        width={"80%"}
                      >
                        <label>Account Type</label>
                      </Box>
                      <TextField
                        select
                        onChange={(e)=>{setLoginDetails({...loginDetails,accountType:e.target.value})}}
                        style={{ background: "white", width: "80%" }}
                        size="small"
                        value={loginDetails.accountType}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton>
                                <PersonIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="user">User</MenuItem>
                      </TextField>
                    </Box>

                    {/* Email */}
                    <Box
                      width={"100%"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      color={"white"}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"left"}
                        width={"80%"}
                      >
                        <label htmlFor="">Email</label>
                      </Box>
                      <TextField
                        style={{ background: "white", width: "80%" }}
                        placeholder="Email"
                        onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})}
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
                      <span style={{visibility:`${validation.email==true?"visible":"hidden"}`,color:"red"}}>*Enter valid email</span>
                    </Box>

                    {/* Password */}
                    <Box
                      width={"100%"}
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      color={"white"}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"left"}
                        width={"80%"}
                      >
                        <label htmlFor="">Password</label>
                      </Box>
                      <TextField
                        placeholder="**********"
                        onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}
                        style={{ background: "white", width: "80%" }}
                        size="small"
                        type="password"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment>
                              <IconButton>
                                <LockOpenIcon />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      ></TextField>
                      <span style={{visibility:`${validation.password?"visible":"hidden"}`,color:"red"}}>*Password or otp is required</span>
                    </Box>
                    {/* Switch */}
                    <Box width={"80%"}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch onChange={handleOTP} color="default"/>}
                          label="Use OTP"
                          style={{ color: "white" }}
                        />
                      </FormGroup>
                    </Box>
                  </Box>

                  {/* Bottom */}
                  <Box
                    height={"25%"}
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    {/* CheckBox */}
                    <Box width={"80%"} display={"flex"}>
                      <FormControlLabel
                        label={<Typography color={"white"}>Remember me</Typography>}

                        control={<Checkbox 
                            style ={{
                                color: "white",
                              }}
                        />}
                      />
                    </Box>

                    {/* Button */}
                    <Button style={{background:"#ffeb0a",color:"black"}} variant="contained" sx={{width:"80%"}} onClick={handleLogin}>Login</Button>
                    <Box width={"80%"}>
                    <Link to={"/forgot-password"} style={{textDecoration:"none"}}>
                        <Typography color={"#ffeb0a"}>Forgot Password?</Typography>
                    </Link>
                    </Box>
                  </Box>
                </Box>
                {/* Right side Image Form*/}
                <Box height={"100%"} width={"55%"} bgcolor={"green"}>
                  <img
                    src="Login.png"
                    alt="Login  image"
                    height={"100%"}
                    width={"100%"}
                  />
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};
