import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box,} from "@mui/material";

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
  shareHolding,
) {
  return {
    relation,
    name,
    pan,
    shareHolding,
  };
}

const rows = [
  createData("Brother", "ABC", "QNCPA8192J", "Yes"),

];

export const FamilyInterestTable = () => {
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
        <Box width={"100%"} minHeight={"90%"} display={"flex"} flexDirection={"column"}  justifyContent={"flex-start"} paddingTop={"70px"} alignItems={"center"} gap={4}>

          <TableContainer component={Paper} sx={{ minWidth: 300}}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Relation</StyledTableCell>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="left">Pan</StyledTableCell>
                  <StyledTableCell align="left">
                    Share Holding
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
                      {row.shareHolding}
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
