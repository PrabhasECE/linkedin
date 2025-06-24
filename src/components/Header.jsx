import React from 'react';
import {
  AppBar, Toolbar, InputBase, Box, Button,
  IconButton, Typography, Avatar,
  Divider,
  Badge // Material-UI Badge component for notifications
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { alpha, useTheme } from '@mui/material/styles'; // Utilities for theme-based styling
import useMediaQuery from '@mui/material/useMediaQuery'; // Hook for responsive design
import { Link, useLocation } from 'react-router-dom'; // For navigation and current path

import ThemeToggleButton from './ThemeToggleButton'; // Component to toggle light/dark theme

/**
 * Global header component for the LinkedIn clone application.
 * Features a LinkedIn logo, search bar, main navigation icons with active states,
 * a user profile link, a "Try Premium" link, and a theme toggle button.
 * Includes a notification badge on the Notifications icon.
 */
function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is mobile size
  const location = useLocation(); // Get current URL path for active navigation state

  // Dummy notification count for demonstration.
  // In a real application, this count would typically come from an API or global state.
  const unreadNotificationCount = 7;

  // Configuration for main navigation items
  const mainNavItems = [
    { label: 'Home', icon: <HomeIcon />, path: '/' },
    { label: 'My Network', icon: <GroupIcon />, path: '/mynetwork' },
    { label: 'Jobs', icon: <WorkIcon />, path: '/jobs' },
    { label: 'Messaging', icon: <MessageIcon />, path: '/messaging' },
    {
      label: 'Notifications',
      // The Notifications icon is wrapped with a Badge to display unread count
      icon: (
        <Badge badgeContent={unreadNotificationCount} color="error" max={99}>
          <NotificationsIcon />
        </Badge>
      ),
      path: '/notifications'
    },
  ];

  return (
    <AppBar position="fixed" elevation={1} sx={{ bgcolor: theme.palette.background.paper, borderBottom: `1px solid ${theme.palette.divider}` }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 52 }}>
        {/* Left Section: LinkedIn Logo and Search Bar */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, pr: 2 }}>
          {/* LinkedIn Logo Button */}
          <Button
            component={Link}
            to="/"
            disableRipple
            sx={{
              minWidth: 0, p: 0, mr: isMobile ? 0 : 1,
              '& .MuiButton-startIcon': { mr: 0 },
            }}
          >
            {/* LinkedIn Logo SVG definition */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#0A66C2"/>
              <path
                d="M4.981 3.51C4.981 4.341 4.349 5 3.518 5C2.686 5 2.054 4.341 2.054 3.51C2.054 2.679 2.686 2.02 3.518 2.02C4.349 2.02 4.981 2.679 4.981 3.51Z"
                fill="white"
              />
              <path
                d="M5.21 7.21H2.109V21.056H5.21V7.21Z"
                fill="white"
              />
              <path
                d="M8.59 7.21H11.59V8.66C12.01 7.912 13.06 7.025 14.7 7.025C18.176 7.025 18.847 9.387 18.847 12.355V21.056H15.74V13.08C15.74 12.072 15.718 11.025 15.011 10.222C14.28 9.398 13.254 9.255 12.781 9.255C12.32 9.255 11.666 9.398 11.364 9.54V21.056H8.59V7.21Z"
                fill="white"
              />
            </svg>
          </Button>

          {/* Search Input Bar (hidden on mobile) */}
          {!isMobile && (
            <Box
              sx={(theme) => ({
                position: 'relative',
                borderRadius: theme.shape.borderRadius,
                backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.1) : alpha(theme.palette.common.black, 0.08),
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0.15) : alpha(theme.palette.common.black, 0.12),
                },
                marginRight: theme.spacing(2),
                marginLeft: 0,
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                  marginLeft: theme.spacing(3),
                  width: 'auto',
                },
                color: theme.palette.text.primary,
              })}
            >
              {/* Search Icon inside the input field */}
              <Box
                sx={(theme) => ({
                  padding: theme.spacing(0, 2),
                  height: '100%',
                  position: 'absolute',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.palette.text.secondary,
                })}
              >
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </Box>
              {/* Actual Input Base */}
              <InputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={(theme) => ({
                  color: 'inherit',
                  width: '100%',
                  '& .MuiInputBase-input': {
                    padding: theme.spacing(1, 1, 1, 0),
                    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                    transition: theme.transitions.create('width'),
                    [theme.breakpoints.up('md')]: {
                      width: '20ch',
                      '&:focus': {
                        width: '28ch',
                      },
                    },
                    [theme.breakpoints.down('sm')]: {
                        width: '100%',
                    },
                  },
                })}
              />
            </Box>
          )}
        </Box>

        {/* Right Section: Main Navigation Icons and Utility Menus */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0, // Prevents shrinking
          ml: 'auto',    // Pushes content to the right
          overflowX: 'auto', // Allows horizontal scrolling on small screens if items overflow
          '&::-webkit-scrollbar': { display: 'none' }, // Hides scrollbar for clean look
          msOverflowStyle: 'none', // For IE/Edge
          scrollbarWidth: 'none', // For Firefox
        }}>
          {/* Main Navigation Icons (Home, My Network, Jobs, Messaging, Notifications) */}
          {mainNavItems.map((item) => {
            const isActive = location.pathname === item.path; // Determine if the current item is active
            return (
              <Box
                key={item.label}
                component={Link} // Use Link for navigation
                to={item.path}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: { xs: 0.5, md: 1 },
                  minWidth: { xs: 60, md: 80 }, // Minimum width for responsiveness
                  color: isActive ? theme.palette.text.primary : theme.palette.text.secondary, // Active/inactive color
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.text.primary }, // Hover effect
                  cursor: 'pointer',
                  borderBottom: isActive ? `2px solid ${theme.palette.text.primary}` : 'none', // Active indicator
                  transition: 'border-bottom 0.3s ease, color 0.3s ease', // Smooth transitions
                }}
              >
                <IconButton color="inherit" size={isMobile ? "small" : "medium"} disableRipple sx={{ mb: -0.5 }}>
                  {item.icon}
                </IconButton>
                <Typography variant="caption" sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '0.7rem' }}>
                  {item.label}
                </Typography>
              </Box>
            );
          })}

          {/* Vertical Divider for separation */}
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'divider', height: 40 }} />

          {/* User Profile Link */}
          <Box
            component={Link}
            to="/profile" // Link to the user's profile page
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: { xs: 0.5, md: 1 },
              minWidth: { xs: 60, md: 80 },
              color: location.pathname === '/profile' ? theme.palette.text.primary : theme.palette.text.secondary,
              textDecoration: 'none',
              '&:hover': { color: theme.palette.text.primary },
              cursor: 'pointer',
              borderBottom: location.pathname === '/profile' ? `2px solid ${theme.palette.text.primary}` : 'none',
              transition: 'border-bottom 0.3s ease, color 0.3s ease',
            }}
          >
            <Avatar sx={{ width: 40, height: 40 }} alt="User Profile" src="https://cdn-useast1.kapwing.com/static/templates/custom-background-profile-picture-maker-full-75577a19.webp"></Avatar>
            <Typography variant="caption" sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '0.7rem', mt: 0.5 }}>
              Me
            </Typography>
          </Box>

          {/* "Try Premium" Link (hidden on mobile) */}
          {!isMobile && (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: { xs: 0.5, md: 1 },
              minWidth: { xs: 60, md: 80 },
              color: theme.palette.text.secondary,
              cursor: 'pointer',
            }}>
              <Typography variant="caption" sx={{ textAlign: 'center', fontSize: '0.7rem', mt: 0.5 }}>
                Try Premium for free
              </Typography>
            </Box>
          )}

          {/* Theme Toggle Button */}
          <ThemeToggleButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;