import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#555555",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   height:60
}));

function createData(
  relation,
  name,
  pan,
  email,
  phone,
  dob
) {
  return {
    relation,
    name,
    pan,
    email,
    phone,
    dob
  };
}

const rows = [
  createData("Brother", "ABC", "QNCPA8192J", "abc@gmail.com", "97201 17209","05/02/2019"),

];

export const FamilyTable = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        gap={5}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Table */}
        <Box width={"100%"}  minHeight={"90%"} display={"flex"} flexDirection={"column"}  justifyContent={"flex-start"} paddingTop={"70px"} alignItems={"center"} gap={4}>

          <TableContainer component={Paper} sx={{ minWidth: 300}}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Relation</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Pan</StyledTableCell>
                  <StyledTableCell align="left">
                    Email
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Phone
                  </StyledTableCell>
                  <StyledTableCell align="left">
                   DOB
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.relation}>
                    <StyledTableCell component="th" scope="row">
                      {row.relation}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.pan}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.email}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.phone}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.dob}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};
