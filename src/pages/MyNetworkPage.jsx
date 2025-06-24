import React from 'react';
import {
  Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupIcon from '@mui/icons-material/Group';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import SchoolIcon from '@mui/icons-material/School';

import ConnectionSuggestionSection from '../components/ConnectionSuggestionSection';
import { dummyPeople } from '../dummyData.js';

const navItems = [
  { label: 'Connections', icon: <PeopleIcon />, count: 1200 },
  { label: 'Invitations', icon: <PersonAddAlt1Icon />, count: 5 },
  { label: 'Following', icon: <RssFeedIcon />, count: 250 },
  { label: 'Groups', icon: <GroupIcon />, count: 10 },
  { label: 'Events', icon: <EventNoteIcon />, count: 3 },
  { label: 'Pages', icon: <DescriptionIcon />, count: 7 },
  { label: 'Newsletters', icon: <LinkIcon />, count: 2 },
  { label: 'Hashtags', icon: <SchoolIcon />, count: 15 },
];

const dummyPopular = dummyPeople.map(p => ({ ...p, id: p.id + 100 }));


function MyNetworkPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100%', // MyNetworkPage occupies the full height of App.js's main Box
        width: '100%',
        // MyNetworkPage handles its own scrolling responsive to breakpoint
        overflowY: { xs: 'auto', md: 'hidden' }, // Scrolls on mobile, hides overflow on desktop (children will scroll)
      }}
    >
      {/* Left Sidebar Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '250px' },
          flexShrink: 0,
          // Desktop specific styles for independent scrolling
          height: { md: '100%' },       // Take full height on desktop
          overflowY: { md: 'auto' },     // Enable internal scroll for sidebar on desktop
          // Mobile styles and common styles
          borderRight: { xs: 'none', md: (theme) => `1px solid ${theme.palette.divider}` },
          pb: { xs: 2, md: 0 },
          pt: 3,
          px: 2,
          bgcolor: 'background.paper',
          boxShadow: { xs: 1, md: 0 },
          borderRadius: { xs: '8px', md: '0' },
          mb: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          Manage my network
        </Typography>
        <List disablePadding>
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              button
              sx={{
                py: 0.5,
                px: 1,
                '&:hover': {
                  bgcolor: (theme) => theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: 'text.primary',
                  fontWeight: 'medium',
                }}
              />
              {item.count && (
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'medium' }}>
                  {item.count}
                </Typography>
              )}
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2, borderColor: 'divider' }} />
        <Box sx={{ p: 1 }}>
          <Typography variant="body2" color="primary" sx={{ textAlign: 'center', fontWeight: 'bold', cursor: 'pointer' }}>
            Add personal contacts
          </Typography>
        </Box>
      </Box>

      {/* Right Content Area */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          // Desktop specific styles for independent scrolling
          height: { md: '100%' },     // Take full height on desktop
          overflowY: { md: 'auto' },   // Enable internal scroll for main content on desktop
          // Mobile styles (it will scroll with the parent MyNetworkPage on mobile)
          p: 3,
          pt: { xs: 0, md: 0 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* People you may know section */}
        <ConnectionSuggestionSection
          title="People you may know based on recent activity"
          people={dummyPeople}
        />

        {/* Popular on LinkedIn section */}
        <ConnectionSuggestionSection
          title="Popular on LinkedIn"
          people={dummyPopular}
        />
      </Box>
    </Box>
  );
}

export default MyNetworkPage;