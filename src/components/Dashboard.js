import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Dashboard.css'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

// Get current date and time
const today = new Date(); 

// Extract day, month name, year, and time
const day = today.getDate();
const month = today.toLocaleString('default', { month: 'long' });
const year = today.getFullYear();
const time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time as HH:MM

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, width:'100%', backgroundColor:''}}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black' }}>
            Welcome back, Coco!
          </Typography>
          <Typography sx={{color:'black'}}>
            {/* Display the formatted date and time */}
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, marginTop:'5px', padding:'7px'}}>
      <Grid container spacing={1}>
        <Grid item xs={9.5}>
          <Item sx={{height:'532px', padding:'0'}}>
              <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {m: 1,width: 225,height: 140, backgroundColor: '#D3D3D3'},}}>
                <Paper elevation={3} sx={{padding:'5px'}}>
                <Typography sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    <LibraryBooksOutlinedIcon sx={{color:'white', }}/>
                    <MoreHorizOutlinedIcon sx={{color:'white'}}/>
                </Typography>
                <Typography sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center', width:'100%', height:'105px', padding:'20px'}}>
                  <span className='text-1'>02/08</span>
                  <span className='text-2'>Total Classes</span>
                </Typography>
                </Paper>
                <Paper elevation={3} sx={{padding:'5px'}}>
                <Typography sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    <GroupsOutlinedIcon sx={{color:'white', }}/>
                    <MoreHorizOutlinedIcon sx={{color:'white'}}/>
                </Typography>
                <Typography sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center', width:'100%', height:'105px', padding:'20px'}}>
                  <span className='text-1'>102/150</span>
                  <span className='text-2'>Total Student</span>
                </Typography>
                </Paper>
                <Paper elevation={3} sx={{padding:'5px'}}>
                <Typography sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    <AutoStoriesOutlinedIcon sx={{color:'white', }}/>
                    <MoreHorizOutlinedIcon sx={{color:'white'}}/>
                </Typography>
                <Typography sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center', width:'100%', height:'105px', padding:'20px'}}>
                  <span className='text-1'>07/10</span>
                  <span className='text-2'>Total Subjects</span>
                </Typography>
                </Paper>
                <Paper elevation={3} sx={{padding:'5px'}}>
                <Typography sx={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
                    <GroupsOutlinedIcon sx={{color:'white', }}/>
                    <MoreHorizOutlinedIcon sx={{color:'white'}}/>
                </Typography>
                <Typography sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems: 'center', width:'100%', height:'105px', padding:'20px'}}>
                  <span className='text-3'>Subject/Course Materials</span>
                </Typography>
                </Paper>
              </Box>
              <Box sx={{display: 'flex',flexWrap: 'wrap', flexDirection:'row',alignItems: 'center','& > :not(style)': {m: 1, width: '466px',height: '355px',},}}>
                <Paper elevation={3} sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                  <img src='images/advisory.jpg' style={{width:'340px', padding:'5px'}}/>
                </Paper>
                <Paper elevation={3} sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar sx={{width:'400px'}} />
                  </LocalizationProvider>
                </Paper>
              </Box>
          </Item >
        </Grid>
        <Grid item xs={2.5}>
          <Item sx={{height:'532px', padding:'10px'}}>
            <Typography sx={{marginTop:'10px'}}>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <span>Upcoming Class</span>
                <span>View all</span>
              </div>
            </Typography>
                  <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {width: 230,height: 60, backgroundColor: '#D3D3D3'}, marginTop:'20px', borderRadius:'10px'}}>
                    <Paper elevation={3} sx={{padding:'5px'}}>
                      <Typography sx={{display:'flex', flexDirection:'row', width:'100%', height:'50px',padding:'2px', textAlign:'left'}}>
                        <span style={{width:'150px', fontSize:'15px'}} className='text-1'>CS Elective Web Development</span>
                        <span style={{width:'70px', fontSize:'15px'}}  className='text-2'>8:00 AM - 10:00 AM</span>
                      </Typography>
                      </Paper>
                  </Box>
                  <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {width: 230,height: 60, backgroundColor: '#D3D3D3'}, marginTop:'20px', borderRadius:'10px'}}>
                    <Paper elevation={3} sx={{padding:'5px'}}>
                      <Typography sx={{display:'flex', flexDirection:'row', width:'100%', height:'50px',padding:'2px', textAlign:'left'}}>
                        <span style={{width:'150px', fontSize:'15px'}} className='text-1'>CS Elective Web Development</span>
                        <span style={{width:'70px', fontSize:'15px'}}  className='text-2'>8:00 AM - 10:00 AM</span>
                      </Typography>
                      </Paper>
                  </Box>
                  <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {width: 230,height: 60, backgroundColor: '#D3D3D3'}, marginTop:'20px', borderRadius:'10px'}}>
                    <Paper elevation={3} sx={{padding:'5px'}}>
                      <Typography sx={{display:'flex', flexDirection:'row', width:'100%', height:'50px',padding:'2px', textAlign:'left'}}>
                        <span style={{width:'150px', fontSize:'15px'}} className='text-1'>CS Elective Web Development</span>
                        <span style={{width:'70px', fontSize:'15px'}}  className='text-2'>8:00 AM - 10:00 AM</span>
                      </Typography>
                      </Paper>
                  </Box>
                  <Typography sx={{marginTop:'20px', textAlign:'left'}}>
                    <span>External Links</span>
                    <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {width: 230,height: 60, backgroundColor: '#D3D3D3'}, marginTop:'20px', borderRadius:'10px'}}>
                      <Paper elevation={3} sx={{padding:'5px'}}>
                        <Typography sx={{display:'flex', flexDirection:'row', width:'100%', height:'50px',padding:'2px', textAlign:'left'}}>
                          <span style={{display:'flex', width:'80px', fontSize:'15px', justifyContent:'center'}} className='text-1'><img src='images/teamsIcon.png' style={{width:'40px', margin:'5px'}}/></span>
                          <span style={{width:'150px', fontSize:'15px',margin:'10px'}}  className='text-2'>Login with Teams</span>
                        </Typography>
                      </Paper>
                    </Box>
                    <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {width: 230,height: 60, backgroundColor: '#D3D3D3'}, marginTop:'20px', borderRadius:'10px'}}>
                      <Paper elevation={3} sx={{padding:'5px'}}>
                        <Typography sx={{display:'flex', flexDirection:'row', width:'100%', height:'50px',padding:'2px', textAlign:'left'}}>
                          <span style={{display:'flex', width:'80px', fontSize:'15px', justifyContent:'center'}} className='text-1'><img src='images/outlookIcon.png' style={{width:'40px'}}/></span>
                          <span style={{width:'150px', fontSize:'15px',margin:'10px'}}  className='text-2'>Login with Outlook</span>
                        </Typography>
                      </Paper>
                    </Box>
                  </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default Dashboard;
