import * as React from 'react';
import PropTypes from 'prop-types';
// import { Routes, Route, Link } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Person2Icon from '@mui/icons-material/Person2';
import CalculateIcon from '@mui/icons-material/Calculate';
import './Layout.css';

const drawerWidth = 300;

const iconMap = {
  'Dashboard': <HomeIcon sx={{ color: 'white' }} />,
  'Class Enrollment List': <MenuIcon sx={{ color: 'white' }} />,
  'Course Information': <BookIcon sx={{ color: 'white' }} />,
  'Assessment and Evaluation': <ChecklistIcon sx={{ color: 'white' }} />,
  'Class Attendance': <Person2Icon sx={{ color: 'white' }} />,
  'Grading System & Management': <CalculateIcon sx={{ color: 'white' }} />,
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [drawerLocked, setDrawerLocked] = React.useState(false); // State for locking the drawer
  const [anchorEl, setAnchorEl] = React.useState(null); // State for dropdown menu

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerLockToggle = () => {
    setDrawerLocked(!drawerLocked); // Toggle the lock state
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Open dropdown menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close dropdown menu
  };

  const drawer = (
    <div className="drawer">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          backgroundColor: '#4B6280',
          color: 'white',
        }}
      >
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={handleDrawerLockToggle} color="inherit">
          {drawerLocked ? <LockIcon /> : <LockOpenIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {[
          { text: 'Dashboard', path: '/dashboard' },
          { text: 'Class Enrollment List', path: '/class-enrollment' },
          { text: 'Course Information', path: '/course-info' },
          { text: 'Assessment and Evaluation', path: '/assessment' },
          { text: 'Class Attendance', path: '/attendance' },
          { text: 'Grading System & Management', path: '/grading-system' },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon>{iconMap[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh', // Full height
        overflow: 'auto', // Remove default scrollbar
      }}
    >
      <CssBaseline />
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#680000',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Distant Learning Management System
          </Typography>
          {/* Notification Icon */}
          <IconButton color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          {/* Profile Icon with Name and Dropdown */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={handleMenuOpen}
          >
            <AccountCircle sx={{ fontSize: '30px', color: 'white' }} />
            <Typography variant="body1" sx={{ color: 'white', ml: 1 }}>
              Coco Martin
            </Typography>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Box
        component="nav"
        sx={{
          width: drawerLocked ? drawerWidth : 0,
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          container={container}
          variant={drawerLocked ? 'permanent' : 'temporary'}
          open={drawerLocked || mobileOpen}
          onClose={!drawerLocked ? handleDrawerToggle : undefined}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#4B6280',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        {/* Render child routes here */}
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
