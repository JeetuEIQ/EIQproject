import React from 'react'
import { Box,Typography } from '@mui/material'
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const CircularBar = ({props}) => {
  return (
    <>
    <Box
                minHeight={"100%"}
                width={"20%"}
                border={"1px solid lightgrey"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography variant="h6" color={"#8c8c8c"} fontWeight={"bold"}>
                  {props.heading}
                </Typography>
                <Typography variant="subtitle" color={"#8c8c8c"}>
                  {props.para}
                </Typography>
                <Box width={"70%"}>
                <CircularProgressbar
                  value={props.percentage}
                  text={`${props.percentage}%`}
                  strokeWidth={13}
                  styles={{
                    
                    path: {
                      // Path color
                      stroke: `${props.percentage==100?"#1eca3a":"#f59a23"}`,
                      strokeLinecap: 'butt',
                    },
                  }}
                />
                </Box>
              </Box></>
  )
}
