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
      >
        <Box width={"100%"} height={"10%"}>
          <Typography variant="h4">Director Form</Typography>
        </Box>
        {/* Table */}
        <Box width={"100%"} minHeight={"90%"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={4}>
            <Button variant="outlined" startIcon={<AddIcon/>} sx={{border:"1px solid black", color:"black"}}>Add</Button>
          <TableContainer component={Paper} sx={{ minWidth: 700 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
                      <Typography>{row.name}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.pan}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.email}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.phone}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.dob}</Typography>
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
