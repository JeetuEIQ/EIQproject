import React from "react";
import {
  Box,
} from "@mui/material";
import { HomeHeader } from "../header/HomeHeader";
import { PersonalInfo } from "../forms/PersonalInfo";

export const Personal = () => {
  return (
    <>
    {/* Container */}
      <Box
        bgcolor={""}
        height={"0px"}
        // minWidth={"100vw"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={12}
      >
        {/* Header */}
        <Box
          minWidth={"1400px"}
          bgcolor={"red"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          gap={16}
        >
          <HomeHeader />
        </Box>
        {/* Body container */}
        <Box
          width={"70%"}
          minHeight={"80%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-end"}
          alignItems={"flex-start"}
          gap={2}
        >
          {/* 1st section */}
          <Box minHeight={"100%"}   width={"70%"} display={"flex"} flexDirection={"column"}>
            <PersonalInfo/>
          </Box>

        </Box>
      </Box>
    </>
  );
};
