import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import { HomeHeader } from "../header/HomeHeader";
import DirectorMaster from "../tables/DirectorMaster";
export const Overview = () => {
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
        <Box minWidth={"90%"}  height={"100%"} display={"flex"} flexDirection={"column"} gap={16}>
          <HomeHeader />
        </Box>
        <Box
          width={"70%"}
          minHeight={"70%"}
          display={"flex"}
          flexDirection={"column"}
          gap={6}
        >
          <Typography variant="h4">Director Master Data</Typography>
          <Button
            startIcon={<UploadIcon />}
            variant="contained"
            sx={{
              background: "#ffeb0a",
              color: "black",
              width: "20%",
              height: "10%",
              border: "1px solid black",
              ":hover":{
                background:"#ffeb0a"
              }
            }}
          >
            Bulk Upload
          </Button>
          <DirectorMaster/>
        </Box>
      </Box>
    </>
  );
};
