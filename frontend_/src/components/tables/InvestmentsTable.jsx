import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, IconButton, Typography } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
  company,
  relation,
  designation,
  shareholdingPercent,
  dateOfAppointment,
  dateOfCessation
) {
  return {
    company,
    relation,
    designation,
    shareholdingPercent,
    dateOfAppointment,
    dateOfCessation,
  };
}

const rows = [
  createData("Company ABC", "Self", "Director", "0.5%", "05/02/2019"),
  createData(
    "Company XYZ",
    "Self",
    "Director",
    "1.5%",
    "07/02/2019",
    "09/02/1998"
  ),
];

export const InvestmentsTable = () => {
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
                  <StyledTableCell align="left">Company</StyledTableCell>
                  <StyledTableCell align="left">Relation</StyledTableCell>
                  <StyledTableCell align="left">Designation</StyledTableCell>
                  <StyledTableCell align="left">
                    Shareholding percent
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Date of Appointment
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Date of Cessation
                  </StyledTableCell>
                  <StyledTableCell align="left">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.company}>
                    <StyledTableCell component="th" scope="row">
                      {row.company}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.relation}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.designation}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.shareholdingPercent}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.dateOfAppointment}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.dateOfCessation}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
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
