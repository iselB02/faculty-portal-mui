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
import './Dashboard.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('default', { month: 'long' });
const year = today.getFullYear();
const time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#D9D9D9' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
            Welcome back, Coco!
          </Typography>
          <Typography sx={{ color: 'black' }}>
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, marginTop: '5px', padding: '10px' }}>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={9.5}>
            <Item sx={{ height: '100%', padding: '0' }}>
              {/* Cards Section */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                gap: 2,
                padding: 2,
              }}
            >
              {[
                {
                  icon: <LibraryBooksOutlinedIcon sx={{ color: '#000', fontSize: '30px' }} />,
                  label: 'Total Classes',
                  value: '02/08',
                },
                {
                  icon: <GroupsOutlinedIcon sx={{ color: '#000', fontSize: '30px' }} />,
                  label: 'Total Students',
                  value: '102/150',
                },
                {
                  icon: <AutoStoriesOutlinedIcon sx={{ color: '#000', fontSize: '30px' }} />,
                  label: 'Total Subjects',
                  value: '07/10',
                },
                {
                  icon: <GroupsOutlinedIcon sx={{ color: '#000', fontSize: '30px' }} />,
                  label: 'Subject/Course Materials',
                  value: '',
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 2,
                    backgroundColor: '#748BA966',
                    borderRadius: 2,
                    textAlign: 'center',
                    boxShadow: 1,
                    height: '150px',
                    position: 'relative', // For three dots positioning
                  }}
                >
                  {/* Top Section: Icon and Three Dots */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '40px',
                        height: '40px',
                        // backgroundColor: 'transparent',
                        // borderRadius: '50%',
                        // boxShadow: 2,
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Three Dots Icon */}
                    <MoreHorizOutlinedIcon sx={{ color: '#888', fontSize: '20px', cursor: 'pointer' }} />
                  </Box>

                  {/* Value */}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', mt: 2, color: '#000' }}
                  >
                    {item.value}
                  </Typography>

                  {/* Label */}
                  <Typography variant="body1" sx={{ color: '#555', mt: 1 }}>
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>



              {/* Large Cards Section */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  gap: 2,
                  padding: 2,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexGrow: 1,
                    height: { xs: '200px', sm: '355px' },
                  }}
                >
                  <img
                    src="images/advisory.jpg"
                    alt="Advisory"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </Paper>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexGrow: 1,
                    height: { xs: '200px', sm: '355px' },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                </Paper>
              </Box>
            </Item>
          </Grid>
          {/* Right Section */}
          <Grid item xs={12} md={2.5}>
            <Item sx={{ padding: '10px', height:'100%' }}>
              <Typography sx={{ marginBottom: '10px', fontWeight: 'bold' }}>Upcoming Classes</Typography>
              <Box sx={{ display: 'grid', gap: 2, }}>
                {[1, 2, 3].map((item) => (
                  <Paper
                    key={item}
                    elevation={3}
                    sx={{
                      padding: '10px',
                      backgroundColor: '#D3D3D3',
                      borderRadius: '10px',
                      textAlign: 'left',
                    }}
                  >
                    <Typography sx={{ fontSize: '14px' }}>
                      <strong>CS Elective Web Development</strong>
                    </Typography>
                    <Typography sx={{ fontSize: '12px' }}>8:00 AM - 10:00 AM</Typography>
                  </Paper>
                ))}
              </Box>
              <Typography sx={{ marginTop: '20px', fontWeight: 'bold' }}>External Links</Typography>
              <Box sx={{ display: 'grid', gap: 2, marginTop: '10px' }}>
                {[
                  { icon: 'images/teamsIcon.png', label: 'Login with Teams' },
                  { icon: 'images/outlookIcon.png', label: 'Login with Outlook' },
                ].map((link, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      padding: '10px',
                      backgroundColor: '#D3D3D3',
                      borderRadius: '10px',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <img
                      src={link.icon}
                      alt={link.label}
                      style={{ width: '40px', height: '40px' }}
                    />
                    <Typography sx={{ fontSize: '14px' }}>{link.label}</Typography>
                  </Paper>
                ))}
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
