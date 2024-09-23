import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome back, Coco!
          </Typography>
          <Typography>
            {/* Display the formatted date and time */}
            {day}, {month} {year} - {time}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, marginTop:'5px', backgroundColor:'red', padding:'10px'}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item sx={{height:'590px', backgroundColor:'green'}}>
              <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {m: 1,width: 230,height: 170,},}}>
                <Paper elevation={3}/>
                <Paper elevation={3}/>
                <Paper elevation={3} />
              </Box>
              <Box sx={{display: 'flex',flexWrap: 'wrap', justifyContent: 'space-between',alignItems: 'center','& > :not(style)': {m: 1,width: '100%',height: '370px',},}}>
                <Paper elevation={3}/>
              </Box>
          </Item >
        </Grid>
        <Grid item xs={4}>
          <Item sx={{height:'590px'}}>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default Dashboard;
