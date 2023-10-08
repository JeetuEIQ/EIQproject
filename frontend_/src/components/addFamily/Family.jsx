import React from "react";
import {
  Box,
} from "@mui/material";
import { HomeHeader } from "../header/HomeHeader";
import { Report } from "../tables/Report";
import { DirectorFormTable } from "../tables/DirectorFormTable";
import { InvestmentsTable } from "../tables/InvestmentsTable";
import { AddFamilyForm } from "../forms/AddFamilyForm";
import { FamilyInterestTable } from "../tables/FamilyInterestTable";
import { Interest } from "../forms/Interests";

export const Family = () => {
  return (
    <>
      <Box
        bgcolor={"white"}
        height={"0px"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        // minWidth={"100vw"}
        gap={12}
      >
        {/* Header */}
        <Box
          minWidth={"90%"}
          display={"flex"}
          flexDirection={"column"}
          gap={16}
        >
          <HomeHeader />
        </Box>
        {/* Body */}
        <Box minHeight={"80vh"} width={"70%"}  display={"flex"} justifyContent={"space-between"} >
            {/* Left Side */}
            <Box width={"35%"} height={"100%"} display={"flex"} flexDirection={"column"} gap={1}>
                <AddFamilyForm/>
            </Box>

            {/* Right Side */}
            <Box width={"60%"}  height={"100%"}>
                <FamilyInterestTable/>
            </Box>
        </Box>
        <Box minHeight={"65%"} width={"70%"}  display={"flex"} justifyContent={"space-between"} >
            {/* Left Side */}
            <Box width={"35%"} minHeight={"80vh"} display={"flex"} flexDirection={"column"} gap={1}>
                <Interest/>
            </Box>
        </Box>
      </Box>
    </>
  );
};
