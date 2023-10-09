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
import { Stats } from "../Stats/Stats";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#555555",
    height:"40px",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  // height:60
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   
}));


function createData(
  director_name,
  relation,
) {
  return {
    director_name,
    relation,
  };
}

const rows = [
  createData("Anil Shukla", "anil.shukla764@gmail.com"),
  createData("Divish Sharma", "divish.sharma@email.com"),
  createData("Sanjana Malhotra", "s.malhotra@gmail.com"),
];

export const SummaryTable = () => {
  const [statsFlag,setStatsFlag] = React.useState(false)
  return (
    <>
      <Box
        width={"100%"}
        height={"70%"}
        gap={5}
        display={"flex"}
        flexDirection={"column"}
      >
        {/* Table */}
        <Box width={"60%"} minHeight={"90%"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={4}>
            
          <TableContainer component={Paper} sx={{ minWidth: 400 }}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Company</StyledTableCell>
                  <StyledTableCell align="left">Relation</StyledTableCell>
                  <StyledTableCell align="left">Actions</StyledTableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.director_name}>
                    <StyledTableCell component="th" scope="row">
                      {row.director_name}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography>{row.relation}</Typography>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Typography><Button variant="outlined" size="small" onClick={(e)=>setStatsFlag(true)} sx={{color:"black",border:"1px solid black"}}>View Status</Button></Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {statsFlag?<Stats/>:""}
      </Box>
    </>
  );
};
