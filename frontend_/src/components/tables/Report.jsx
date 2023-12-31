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

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

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

function createData(form, sourceSystem, date) {
  return { form, sourceSystem, date};
}

const rows = [
  createData("TDS", "SAP","21/02/23"),
  createData("Reimbursement Slips", "SAP","21/02/23"),
  createData("Ledger", "SAP","21/02/23"),
];

export const Report = () => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/personal");
  };

  const handleEdit = () => {
    navigate("/personal");
  };
  return (
    <>
      <Box width={"70%"} height={"100%"} gap={5} display={"flex"} flexDirection={"column"}>
        <Box width={"100%"} height={"10%"} >
          <Typography variant="h4">Reports</Typography>
        </Box>
        <Box width={"100%"} minHeight={"90%"}>
          <TableContainer component={Paper} sx={{ minWidth: 700 }}>
            <Table
              sx={{ minWidth: 700, minHeight: 300 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Form</StyledTableCell>
                  <StyledTableCell align="left">Actions</StyledTableCell>
                  <StyledTableCell align="left">Source System</StyledTableCell>
                  <StyledTableCell align="left">Date</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.form}>
                    <StyledTableCell component="th" scope="row">
                      {row.form}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Button
                        fullWidth
                          variant="outlined"
                          sx={{ border: "1px solid black", color: "black" }}
                        >
                          Get Information
                        </Button>
                        <Button
                        fullWidth
                          variant="outlined"
                          sx={{ border: "1px solid black", color: "black" }}
                        >
                          Download
                        </Button>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.sourceSystem}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        <Typography>{row.date}</Typography>
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
