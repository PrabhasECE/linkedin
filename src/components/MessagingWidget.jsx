import React from 'react';
import {
  Paper, Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText,
  Divider, IconButton, InputBase
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SendIcon from '@mui/icons-material/Send';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { recentConversations } from '../dummyData.js';

/**
 * A floating messaging widget that can be expanded or collapsed.
 * It displays a list of recent conversations and a message input field when expanded.
 */
function MessagingWidget() {
  // State to control the expanded/collapsed state of the widget.
  // It's collapsed by default.
  const [isExpanded, setIsExpanded] = React.useState(false);

 
  const handleToggleExpand = (event) => {
    setIsExpanded(prev => !prev);
  };

 
  const handleIconClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: { xs: 'calc(100% - 32px)', sm: 300 },
        maxHeight: isExpanded ? 400 : 56, // Dynamically adjust max-height for expand/collapse
        minHeight: 56,
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: 3,
        zIndex: 1200, // Ensure it floats above other content
        display: 'flex',
        flexDirection: 'column',
        transition: 'max-height 0.3s ease-in-out', // Smooth animation for expand/collapse
      }}
    >
      {/* Widget Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1,
          backgroundColor: 'background.paper',
          borderBottom: isExpanded ? '1px solid' : 'none', // Border only when expanded
          borderColor: 'divider',
          cursor: 'pointer',
        }}
        onClick={handleToggleExpand} // Click anywhere on header to toggle
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', ml: 1 }}>
          Messaging
        </Typography>
        <Box>
          {/* More options icon */}
          <IconButton size="small" aria-label="more options" onClick={handleIconClick}>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
          {/* New message icon */}
          <IconButton size="small" aria-label="new message" onClick={handleIconClick}>
            <EditNoteIcon fontSize="small" />
          </IconButton>
          {/* Expand/Collapse icon */}
          <IconButton size="small" onClick={handleToggleExpand} aria-label={isExpanded ? "collapse" : "expand"}>
            {isExpanded ? <ExpandMoreIcon fontSize="small" /> : <ExpandLessIcon fontSize="small" />}
          </IconButton>
        </Box>
      </Box>

      {/* Conversations List and Message Input (visible only when expanded) */}
      {isExpanded && (
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <List dense disablePadding>
            {recentConversations.map((conversation) => (
              <React.Fragment key={conversation.id}>
                <ListItem button alignItems="flex-start" sx={{ py: 1 }}>
                  <ListItemAvatar>
                    <Avatar alt={conversation.name} src={conversation.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Typography variant="body2" sx={{ fontWeight: 'bold' }}>{conversation.name}</Typography>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {conversation.lastMessage}
                        </Typography>
                        {" — " + conversation.time}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
              </React.Fragment>
            ))}
          </List>

          {/* New Message Input Area */}
          <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', borderTop: '1px solid', borderColor: 'divider' }}>
            <InputBase
              placeholder="Write a message..."
              fullWidth
              sx={{ flexGrow: 1, mr: 1, px: 1, py: 0.5, borderRadius: '20px', backgroundColor: '#f0f2f5' }}
            />
            <IconButton color="primary" sx={{ p: '8px' }} aria-label="send message">
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </Paper>
  );
}

export default MessagingWidget;