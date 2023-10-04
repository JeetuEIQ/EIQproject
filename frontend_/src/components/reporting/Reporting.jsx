import React from "react";
import {
  Box,
} from "@mui/material";
import { HomeHeader } from "../header/HomeHeader";
import { Report } from "../tables/Report";

export const Reporting = () => {
  return (
    <>
      <Box
        bgcolor={"white"}
        height={"0px"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={12}
      >
        <Box
          minWidth={"90%"}
          display={"flex"}
          flexDirection={"column"}
          gap={16}
        >
          <HomeHeader />
        </Box>
        <Box minHeight={"65%"} width={"70%"} >
            <Report/>
        </Box>
      </Box>
    </>
  );
};
