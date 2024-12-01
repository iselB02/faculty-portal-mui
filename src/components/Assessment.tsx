import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DescriptionIcon from '@mui/icons-material/Description';
import AddBoxIcon from '@mui/icons-material/AddBox';
import StarsIcon from '@mui/icons-material/Stars';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import './Assestment.css';

const today: Date = new Date();
const day: number = today.getDate();
const month: string = today.toLocaleString('default', { month: 'long' });
const year: number = today.getFullYear();
const time: string = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function createData(
  image: string,
  name: string,
  studentID: string,
) {
  return { image, name, studentID};
}

const rows = [
  createData('/images/profile-pic.jpg', 'Ablez, Coco M. ', '2021-90784'),
  createData('/images/profile-pic.jpg', 'Antonio, Martin E. ', '2021-45902'),
  createData('/images/profile-pic.jpg', 'Anton, Mary Jane F. ', '2021-56371'),
  createData('/images/profile-pic.jpg', 'Amora, Elyse T. ', '2021-12903'),
  createData('/images/profile-pic.jpg', 'Gingerbread', '2021-45109'),
];

const activities = [
  { name: 'Activity 1' },
  { name: 'Activity 2' },
  { name: 'Activity 3' },
  { name: 'Activity 4' },
  { name: 'Activity 5' },
  { name: 'Activity 6' },
  { name: 'Activity 7' },
];

const quiz = [
  { name: 'Quiz 1' },
  { name: 'Quiz 2' },
  { name: 'Quiz 3' },
  { name: 'Quiz 4' },
  { name: 'Quiz 5' },
  { name: 'Quiz 6' },
  { name: 'Quiz 7' },
];



export default function Assessment() {
  const [section, setSection] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSection(event.target.value as string);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'black' }}
            id="title-classEnroll"
          >
            Class Enrollment List
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px', alignItems: 'center' }}>
      <div className="classEnrollment-dropdown">
        <FormControl
            sx={{
              width: '300px',
              backgroundColor: '#F5F5F5',
              borderRadius: '8px',
            }}
          >
            <InputLabel id="select-section-1-label">Select Course Code</InputLabel>
            <Select
              labelId="select-section-1-label"
              id="select-section-1"
              value={section}
              label="Select Section"
              onChange={handleChange}
              sx={{
                height: '50px',
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
              backgroundColor: '#F5F5F5',
              borderRadius: '8px',
            }}
          >
            <InputLabel id="select-section-2-label">Select Class</InputLabel>
            <Select
              labelId="select-section-2-label"
              id="select-section-2"
              value={section}
              label="Select Section"
              onChange={handleChange}
              sx={{
                height: '50px',
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell 
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      
      <div className="act-assesstment">
        <div className="act">
          <h2>Activities</h2>
          {activities.map((activity) => (
          <div className="act-item">
            <div className='other-item'>
              <DescriptionIcon/>
              <h3>{activity.name}</h3>
            </div>
            <div className="other-item-2">
              <AddBoxIcon/>
              <StarsIcon/>
              <DownloadForOfflineIcon/>
            </div>
          </div>
                ))}
        </div>
        <div className="assest">
          <h2>Assessments</h2>
          {quiz.map((quiz) => (
          <div className="act-item">
            <div className='other-item'>
              <DescriptionIcon/>
              <h3>{quiz.name}</h3>
            </div>
            <div className="other-item-2">
              <AddBoxIcon/>
              <StarsIcon/>
              <DownloadForOfflineIcon/>
            </div>
          </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}
