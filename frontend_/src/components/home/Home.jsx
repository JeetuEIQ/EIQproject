import React from "react";
import {
  Box,
} from "@mui/material";
import { HomeHeader } from "../header/HomeHeader";
export const Home = () => {
  return (
    <>
      <Box
        bgcolor={"white"}
        height={"0px"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={18}
      >
        <Box minWidth={"90%"} display={"flex"} flexDirection={"column"} gap={16}>
          <HomeHeader />
        </Box>
      </Box>
    </>
  );
};
