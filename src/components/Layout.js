import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import HomeIcon from '@mui/icons-material/Home'; // Home icon
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import BookIcon from '@mui/icons-material/Book'; // Book icon
import ChecklistIcon from '@mui/icons-material/Checklist'; // Checklist icon
import Person2Icon from '@mui/icons-material/Person2';
import CalculateIcon from '@mui/icons-material/Calculate'; // Calculator icon
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Layout.css';

const drawerWidth = 300;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const iconMap = {
  'Dashboard': <HomeIcon sx={{color:'white'}} />,
  'Class Enrollment List': <MenuIcon sx={{color:'white'}}/>,
  'Course Information': <BookIcon sx={{color:'white'}}/>,
  'Assessment and Evaluation': <ChecklistIcon sx={{color:'white'}}/>,
  'Class Attendance': <Person2Icon sx={{color:'white'}}/>,
  'Grading System & Management': <CalculateIcon sx={{color:'white'}}/>,
};

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        {['Dashboard', 'Class Enrollment List', 'Course Information', 'Assessment and Evaluation', 'Class Attendance', 'Grading System & Management'].map((text) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                {iconMap[text]} {/* Use the icon from the iconMap */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#680000' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo on the left */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src="images/plm-logo.png" alt="Logo" style={{ width: '300px' }} />
          </IconButton>

          {/* Centered Text */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: '600',
              fontSize: '25px',
              color: 'white',
            }}
          >
            Distant Learning Management System
          </Typography>

          {/* Notification and Profile Icons Container */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Notification Icon */}
            <IconButton aria-label="notifications">
              <StyledBadge badgeContent={4} color="secondary">
                <NotificationsIcon sx={{ fontSize: '35px', color: 'white' }} />
              </StyledBadge>
            </IconButton>

            {/* Profile Icon with Dropdown */}
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ fontSize: '45px', color: 'white' }} />
                <h2 className='user-name' style={{ margin: '0 0 0 8px', color: 'white' }}>Coco Martin</h2>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, marginTop: '64px' }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#4B6280', color:'white'},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '80px', backgroundColor:'#4B6280', color:'white'},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: '80px' }}
      >
        <Typography sx={{ marginBottom: 2 }}>
          MAIN CONTENT
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam...
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
