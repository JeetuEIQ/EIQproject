import React from 'react'
import { Box, Typography,Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
export const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box height={"100%"} width={"100%"} bgcolor={"#333332"} display={"flex"}>
        {/* Left */}
        <Box width={"50%"} height={"100%"} display={"flex"} justifyContent={"flex-start"} alignItems={"center"}   marginLeft={"10%"}>
            <img src="logo.png" alt=""  style={{height:"70%"}}/>
        </Box>
        {/* Right */}
        <Box width={"50%"} height={"100%"}  display={"flex"}  justifyContent={"center"} gap={10} alignItems={"center"} paddingLeft={"13%"}>
          <Link to={"/admin-summary"}>
            <Typography sx={{color:"white",":hover": { textDecoration: "underline" }}}>Summary</Typography>
          </Link>
          <Link>
            <Typography sx={{color:"white",":hover": { textDecoration: "underline" }}}>Director<br/>Onboarding</Typography>
          </Link>
          <Button onClick={()=>{navigate("/")}} variant='outlined' sx={{color:"white", border:"1px solid white"}} size='large'> Logout</Button>
        </Box>
      </Box>
    </>
  )
}
