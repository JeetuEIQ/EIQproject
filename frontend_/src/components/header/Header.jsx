import React from "react";
import { Box } from "@mui/material";
export const Header = () => {
  return (
    <>
      <Box height={"15%"} bgcolor={"#333332"}>
        <Box
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          paddingLeft={"13%"}
        >
          <img src="logo.png" alt="" height={"70%"} />
        </Box>
      </Box>
    </>
  );
};
