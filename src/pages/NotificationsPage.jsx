import React from 'react';
import {
  Box, Typography, Card, Avatar, IconButton,
  List, ListItem, ListItemAvatar, ListItemText, Divider
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WorkIcon from '@mui/icons-material/Work';
import CakeIcon from '@mui/icons-material/Cake';
import EventNoteIcon from '@mui/icons-material/EventNote'; // For general events/updates
import {dummyNotifications} from '../dummyData.js'
// Helper function to get icon based on notification type
const getNotificationIcon = (type) => {
  switch (type) {
    case 'like': return <ThumbUpIcon sx={{ color: 'primary.main' }} />;
    case 'comment': return <ChatBubbleOutlineIcon sx={{ color: 'secondary.main' }} />;
    case 'connection': return <PersonAddIcon sx={{ color: 'success.main' }} />;
    case 'profile_view': return <VisibilityIcon sx={{ color: 'info.main' }} />;
    case 'job_update': return <WorkIcon sx={{ color: 'warning.main' }} />;
    case 'celebration': return <CakeIcon sx={{ color: 'error.main' }} />;
    case 'event': return <EventNoteIcon sx={{ color: 'text.secondary' }} />;
    default: return <MoreHorizIcon sx={{ color: 'text.secondary' }} />;
  }
};



function NotificationsPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100%',
        width: '100%',
        bgcolor: 'background.default',
        p: { xs: 1, md: 2 }, // Padding for responsive design
        boxSizing: 'border-box', // Ensure padding is included in width/height
      }}
    >
      <Card
        sx={{
          width: { xs: '100%', sm: '600px', md: '700px' }, // Responsive width
          maxWidth: '100%',
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto', // Enable scrolling for notification list
        }}
      >
        <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            Notifications
          </Typography>
        </Box>
        <List sx={{ width: '100%', p: 0 }}>
          {dummyNotifications.map((notification, index) => (
            <React.Fragment key={notification.id}>
              <ListItem
                alignItems="flex-start"
                button
                // In a real app, clicking would mark as read and navigate
                onClick={() => console.log('Clicked notification:', notification.id, 'Navigating to:', notification.actionLink)}
                sx={{
                  py: 1.5,
                  bgcolor: notification.isRead ? 'inherit' : (theme) => theme.palette.action.selected, // Highlight unread
                  '&:hover': {
                    bgcolor: (theme) => theme.palette.action.hover,
                  },
                }}
              >
                <ListItemAvatar sx={{ minWidth: 48, mr: 1 }}>
                  <Avatar sx={{ bgcolor: 'transparent' }}>
                    {getNotificationIcon(notification.type)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                        sx={{
                          fontWeight: notification.isRead ? 'normal' : 'bold',
                          flexGrow: 1,
                          mr: 1,
                        }}
                      >
                        {notification.content}
                      </Typography>
                      <IconButton size="small" sx={{ color: 'text.secondary' }}>
                        <MoreHorizIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Box>
                  }
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="caption"
                      color="text.secondary"
                    >
                      {notification.time}
                    </Typography>
                  }
                />
              </ListItem>
              {index < dummyNotifications.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </Box>
  );
}

export default NotificationsPage;