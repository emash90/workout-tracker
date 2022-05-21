import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(description, date, duration) {
    return { description, date, duration};
  }
function Display({ exercises, loading }) {
    useEffect(() => {
        
    }, [])
    if(loading) {
        return (
            <div>
                loading...
            </div>
        )
    }
  return (
    <TableContainer style={{width: '800px'}} component={Paper}>
    <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <StyledTableCell>exercise date</StyledTableCell>
          <StyledTableCell align="right">exercise description</StyledTableCell>
          <StyledTableCell align="right">duration(min)</StyledTableCell>
          <StyledTableCell align="right">edit exercise</StyledTableCell>
          <StyledTableCell align="right">delete exercise</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {exercises.map((exercise) => (
          <StyledTableRow key={exercise._id}>
            <StyledTableCell component="th" scope="row">
              {new Date(exercise.date).toLocaleDateString()}
            </StyledTableCell>
            <StyledTableCell align="right">{exercise.description}</StyledTableCell>
            <StyledTableCell align="right">{exercise.duration}</StyledTableCell>
            <StyledTableCell align="right"><button>edit</button></StyledTableCell>
            <StyledTableCell align="right"><button>delete</button></StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Display