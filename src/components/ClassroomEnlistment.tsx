import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./ClassroomEnlistment.css";

const today: Date = new Date();
const day: number = today.getDate();
const month: string = today.toLocaleString('default', { month: 'long' });
const year: number = today.getFullYear();
const time: string = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function createData(
  image: string,
  name: string,
  studentID: string,
  courseYearLevel: string,
  status: string,
) {
  return { image, name, studentID, courseYearLevel, status };
}

const rows = [
  createData('/images/profile-pic.jpg', 'Ablez, Coco M. ', '2021-90784', 'Computer Science - 4th Year', 'Enrolled'),
  createData('/images/profile-pic.jpg', 'Antonio, Martin E. ', '2021-45902', 'Computer Science - 4th Year', 'Enrolled'),
  createData('/images/profile-pic.jpg', 'Anton, Mary Jane F. ', '2021-56371', 'Computer Science - 4th Year', 'Enrolled'),
  createData('/images/profile-pic.jpg', 'Amora, Elyse T. ', '2021-12903', 'Computer Science - 4th Year', 'Enrolled'),
  createData('/images/profile-pic.jpg', 'Gingerbread', '2021-45109', 'Computer Science - 4th Year', 'Enrolled'),
];

export default function ClassroomEnlistment() {
  const [age, setAge] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="enlistment-container">
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'black' }}
          >
            Class Enrollment List
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="dropdown">
        <FormControl  
          sx={{
            width: '300px',
            margin: '0 auto',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
          }}>
          <InputLabel id="demo-simple-select-label">Select Course Code</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              height: '50px'
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl 
          sx={{
            width: '300px',
            margin: '0 auto',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
          }}>
          <InputLabel id="demo-simple-select-label">Select Section</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              height: '50px'
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField id="outlined-search" label="Search field" type="search" sx={{
            width: '300px',
            margin: '0 auto',
            backgroundColor: '#F5F5F5',
            borderRadius: '8px',
          }}/>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"
              sx={{
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 500
              }}
              >Student Name</TableCell>
              <TableCell align="center"
              sx={{
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 500
              }}>Student ID</TableCell>
              <TableCell align="center"
              sx={{
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 500
              }}>Course | Year Level</TableCell>
              <TableCell align="center"
              sx={{
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 500
              }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell id='first-row' component="th" scope="row" sx={{
                  color: '#4B6280',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: 500
                }}><img
                  src={row.image}
                  alt={row.name}
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }} />{row.name}</TableCell>
                <TableCell align="center" sx={{
                  color: '#4B6280',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: 500
                }}>{row.studentID}</TableCell>
                <TableCell align="center" sx={{
                  color: '#4B6280',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: 500
                }}>{row.courseYearLevel}</TableCell>
                <TableCell align="center" sx={{
                  color: '#008000',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontWeight: 500
                }}>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
}
