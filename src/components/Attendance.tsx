import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Attendance.css';

const today: Date = new Date();
const day: number = today.getDate();
const month: string = today.toLocaleString('default', { month: 'long' });
const year: number = today.getFullYear();
const time: string = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function createData(
  image: string,
  name: string,

) {
  return { image, name};
}

const rows = [
  createData('/images/profile-pic.jpg', 'Ablez, Coco M. '),
  createData('/images/profile-pic.jpg', 'Antonio, Martin E. '),
  createData('/images/profile-pic.jpg', 'Anton, Mary Jane F. '),
  createData('/images/profile-pic.jpg', 'Amora, Elyse T. '),
  createData('/images/profile-pic.jpg', 'Gingerbread' ),
];

export default function Attendance() {
  const [courseCode, setCourseCode] = React.useState<string>('');
  const [classSection, setClassSection] = React.useState<string>('');

  const handleCourseChange = (event: SelectChangeEvent) => {
    setCourseCode(event.target.value as string);
  };

  const handleClassChange = (event: SelectChangeEvent) => {
    setClassSection(event.target.value as string);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'black' }}
            id="title-classEnroll"
          >
            Class Attendance
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="class-sched-dropdown">
        <div className='sched-dropdown'>
          <FormControl
            sx={{
              width: '300px',
              backgroundColor: '#F5F5F5',
              borderRadius: '8px',
            }}
          >
            <InputLabel id="course-code-select-label">Select Course Code</InputLabel>
            <Select
              labelId="course-code-select-label"
              id="course-code-select"
              value={courseCode}
              label="Select Course Code"
              onChange={handleCourseChange}
              sx={{ height: '50px' }}
            >
              <MenuItem value={'CSC101'}>CSC101 - Intro to Programming</MenuItem>
              <MenuItem value={'CSC202'}>CSC202 - Data Structures</MenuItem>
              <MenuItem value={'CSC303'}>CSC303 - Algorithms</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: '300px',
              backgroundColor: '#F5F5F5',
              borderRadius: '8px',
            }}
          >
            <InputLabel id="class-section-select-label">Select Class Section</InputLabel>
            <Select
              labelId="class-section-select-label"
              id="class-section-select"
              value={classSection}
              label="Select Class Section"
              onChange={handleClassChange}
              sx={{ height: '50px' }}
            >
              <MenuItem value={'Section A'}>Section A</MenuItem>
              <MenuItem value={'Section B'}>Section B</MenuItem>
              <MenuItem value={'Section C'}>Section C</MenuItem>
            </Select>
          </FormControl>
        </div>
        <button id='take-attend'>Take Attendance</button>
        </div>
        <div className="other-buttons">
          <div className="text">
            <h3 className='text1'>List of Students &gt;</h3>
            <h3 className='text2'>View all</h3>
          </div>
          <div className="btns">
            <button><UploadFileIcon/>Upload Attendance</button>
            <button><UploadFileIcon/>Download Attendance</button>
          </div>
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
              }}
              ></TableCell>
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
                }} ><div id='marks'><div className='mark'>P</div><div className='mark'>A</div><div className='mark'>L</div></div></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>

  );
}
