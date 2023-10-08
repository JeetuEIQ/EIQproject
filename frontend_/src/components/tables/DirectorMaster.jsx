import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Typography } from '@mui/material';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:"#555555",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   height:60
}));

function createData(subForm, completionPercentage, status, ) {
  return { subForm, completionPercentage, status };
}

const rows = [
  createData('Personal', "100%", "Submitted"),
  createData('Employment History', "50%", "Submitted"),
];

export default function DirectorMaster() {


  const navigate=useNavigate();

  const handleView=()=>{
    navigate("/personal")
  }

  const handleEdit=()=>{
    navigate("/personal");
  }

  return (
    <TableContainer component={Paper} sx={{minWidth:700}} >
      <Table sx={{ minWidth: 700 ,minHeight:300}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Sub-Form</StyledTableCell>
            <StyledTableCell align="left">Completion Percentage</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.subForm}>
              <StyledTableCell component="th" scope="row" >
                {row.subForm}
              </StyledTableCell >
              <StyledTableCell  align="left"><Typography sx={{color:`${row.completionPercentage === "100%" ? "green" : row.completionPercentage =="50%" ? "orange" : "black"}`}}>{row.completionPercentage}</Typography></StyledTableCell>
              <StyledTableCell  align="left"><Typography sx={{color:`${row.completionPercentage === "100%" ? "green" : row.completionPercentage =="50%" ? "orange" : "black"}`}}>{row.status}</Typography></StyledTableCell>
              <StyledTableCell  align="left">
                {/* <Box> */}
                    <IconButton onClick={handleView}>
                        <VisibilityIcon/>
                    </IconButton>
                    <IconButton onClick={handleEdit}>
                        <ModeEditIcon/>
                    </IconButton>
                {/* </Box> */}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
