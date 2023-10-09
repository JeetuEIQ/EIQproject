import React from 'react'
import { Box, Typography } from '@mui/material'
import { AdminHeader } from '../header/AdminHeader'
import { InvestmentsTable } from '../tables/InvestmentsTable'
import { SummaryTable } from '../tables/SummaryTable'
import { Stats } from '../Stats/Stats'

export const AdminSummary = () => {
  return (
    //container
    <Box minHeight={"100vh"} height={"0px"} display={"flex"} flexDirection={"column"} gap={10} alignItems={"center"}>
      {/* Header */}
      <Box height={"13%"} width={"90%"}>
        <AdminHeader />
      </Box>
      {/* Body */}
      <Box minHeight={"87%"} width={"100%"}  display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Box minHeight={"100%"} display={"flex"} flexDirection={"column"} gap={4} alignItems={"flex start"} width={"68%"}>
            <Typography variant='h4'>Summary</Typography>
            <SummaryTable/>
          </Box> {/* this box */}
        {/* Add another Box below to increase the container's height */}
      </Box>
    </Box>
  )
}
