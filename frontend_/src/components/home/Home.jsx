import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { HomeHeader } from "../header/HomeHeader";

import { CircularBar } from "../progressBar/CircularBar";
export const Home = () => {
  const personalInfo = [
    {
      type: "Directorship Info",
      document: "Form DIR 8",
    },
    {
      type: "Directorship Info",
      document: "Form DIR 2",
    },
    {
      type: "Directorship Info",
      document: "Declaration of Independence",
    },
    {
      type: "Investments Info",
      document: "Form MBP-1",
    },
    {
      type: "Investments Info",
      document: "List of Committees",
    },
    {
      type: "Basic Disclosure under PIT Code",
      document: "Form B",
    },
    {
      type: "Basic Disclosure under PIT Code",
      document: "Affirmation of Code of Conduct",
    },
  ];
  return (
    <>
      <Box
        bgcolor={"white"}
        height={"0px"}
        minHeight={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={13}
      >
        <Box
          minWidth={"90%"}
          display={"flex"}
          flexDirection={"column"}
          gap={16}
        >
          <HomeHeader />
        </Box>
        {/* Mid Section */}
        <Box minHeight={"60%"} width={"70%"}>
          <Box
            height={"100%"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            gap={5}
          >
            <Box height={"10%"}>
              <Typography variant="h4">Welcome, Ak Singh</Typography>
            </Box>
            <Box
              height={"20%"}
              width={"15%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <img src="profile.svg" alt="" style={{ width: "40%" }} />
              <Button>
                <Typography variant="subtitle">Update Photo</Typography>
              </Button>
            </Box>
            {/* Progress Bar circular */}
            <Box
              width={"100%"}
              height={"250px"}
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <CircularBar
                props={{
                  heading: "Director Master",
                  para: "In Progress",
                  percentage: 75,
                }}
              />
              <CircularBar
                props={{
                  heading: "Family Master",
                  para: "Submitted",
                  percentage: 100,
                }}
              />
              <CircularBar
                props={{
                  heading: "Investments",
                  para: "Submitted",
                  percentage: 100,
                }}
              />
              <CircularBar
                props={{
                  heading: "Director Forms",
                  para: "Submitted",
                  percentage: 100,
                }}
              />
            </Box>
          </Box>
        </Box>


        {/* Bottom */}
        <Box
          minHeight={"50vh"}
          // marginBottom={"50px"}
          width={"70%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Left Box */}
          <Box width={"45%"} minHeight={"90%"} border={"1px solid lightgrey"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              height={"15%"}
              width={"100%"}
              alignItems={"center"}
            >
              <Typography variant="h5" color="#8c8c8c">
                Completed
              </Typography>
            </Box>
            <Box
              display={"flex"}
              height={"85%"}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box height={"100%"} width={"80%"}>
                {personalInfo.map((item) => {
                  return (
                    <ul>
                      <li>
                        <Typography variant="subtitle" color="#8c8c8c">
                          {item.document}
                        </Typography>
                      </li>
                    </ul>
                  );
                })}
              </Box>
            </Box>
        
        
          </Box>
          
          {/* Right Box */}
          <Box width={"45%"} minHeight={"90%"} border={"1px solid lightgrey"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              height={"15%"}
              width={"100%"}
              alignItems={"center"}
            >
              <Typography variant="h5" color="#8c8c8c">
                Pending
              </Typography>
            </Box>
            <Box
              display={"flex"}
              height={"85%"}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box height={"100%"} width={"80%"}>
                {personalInfo.map((item) => {
                  return (
                    <ul>
                      <li>
                        <Typography variant="subtitle" color="#8c8c8c">
                          {item.document}
                        </Typography>
                      </li>
                    </ul>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
