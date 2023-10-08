import React from "react";
import {
  Box,
} from "@mui/material";
import { HomeHeader } from "../header/HomeHeader";
import { Report } from "../tables/Report";
import { DirectorFormTable } from "../tables/DirectorFormTable";
import { InvestmentsTable } from "../tables/InvestmentsTable";

export const Investments = () => {
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
            <InvestmentsTable/>
        </Box>
      </Box>
    </>
  );
};
