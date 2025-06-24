import React, { useState, useRef, useEffect } from 'react';
import {
  Box, Typography, InputBase, Avatar, IconButton,
  List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SendIcon from '@mui/icons-material/Send';

import {dummyConversations} from '../dummyData.js'

function MessagingPage() {
  // Initialize selectedConversation defensively:
  // If dummyConversations is empty, set to null. Otherwise, set to the first conversation.
  const [selectedConversation, setSelectedConversation] = useState(
    dummyConversations.length > 0 ? dummyConversations[0] : null
  );
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Only scroll if there's a selected conversation and messages to scroll
    if (selectedConversation && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedConversation, selectedConversation?.messages?.length]); // Dependency on messages length for new messages

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedConversation) {
      const newMessage = {
        id: selectedConversation.messages.length + 1,
        sender: 'Me',
        text: messageInput.trim(),
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
        isMe: true,
      };

      // Update the selected conversation's messages in state
      setSelectedConversation(prevConv => ({
        ...prevConv,
        messages: [...(prevConv.messages || []), newMessage], // Ensure messages array exists
        lastMessage: newMessage.text,
        time: 'Now',
        unread: 0
      }));

      // For the dummy data, we also update the original array for consistent display
      const convIndex = dummyConversations.findIndex(conv => conv.id === selectedConversation.id);
      if (convIndex !== -1) {
          dummyConversations[convIndex].messages.push(newMessage);
          dummyConversations[convIndex].lastMessage = newMessage.text;
          dummyConversations[convIndex].time = 'Now';
          dummyConversations[convIndex].unread = 0;
      }

      setMessageInput('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100%',
        width: '100%',
        bgcolor: 'background.default',
        p: { xs: 0, md: 2 },
        overflowY: { xs: 'auto', md: 'hidden' },
      }}
    >
      {/* Left Pane: Conversations List */}
      <Box
        sx={{
          width: { xs: '100%', md: '320px' },
          flexShrink: 0,
          mr: { md: 2 },
          mb: { xs: 2, md: 0 },
          height: { md: '100%' },
          overflowY: { md: 'auto' },
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
              Chats
            </Typography>
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <EditIcon />
            </IconButton>
          </Box>
          <InputBase
            placeholder="Search messages"
            sx={{
              width: '100%',
              bgcolor: (theme) => theme.palette.action.hover,
              borderRadius: '4px',
              p: '6px 12px',
            }}
            startAdornment={<SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />}
          />
        </Box>
        <List sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {dummyConversations.map((conv) => (
            <ListItem
              key={conv.id}
              button
              onClick={() => {
                setSelectedConversation(conv);
                if (conv.unread > 0) {
                    conv.unread = 0;
                }
              }}
              sx={{
                py: 1.5,
                px: 2,
                borderLeft: conv.id === selectedConversation?.id ? '3px solid #0A66C2' : 'none',
                bgcolor: conv.id === selectedConversation?.id ? (theme) => theme.palette.action.selected : 'inherit',
                '&:hover': {
                  bgcolor: (theme) => theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 50 }}>
                <Avatar src={conv.avatar} alt={conv.name} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ fontWeight: conv.unread > 0 ? 'bold' : 'normal' }}>
                      {conv.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {conv.time}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {conv.lastMessage}
                  </Typography>
                }
              />
              {conv.unread > 0 && (
                <Box
                  sx={{
                    ml: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '50%',
                    width: 20,
                    height: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}
                >
                  {conv.unread}
                </Box>
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Right Pane: Chat Area */}
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 0,
          height: { md: '100%' },
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {selectedConversation ? ( // Render chat area only if a conversation is selected
          <>
            {/* Chat Header */}
            <Box sx={{ p: 2, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={selectedConversation.avatar} alt={selectedConversation.name} sx={{ width: 40, height: 40, mr: 1.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {selectedConversation.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Online
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton size="small" sx={{ color: 'text.secondary', mr: 0.5 }}>
                  <InfoIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: 'text.secondary' }}>
                  <MoreHorizIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Message History */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
              {/* IMPORTANT: Use optional chaining and fallback empty array here */}
              {(selectedConversation.messages || []).map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                    mb: 1.5,
                  }}
                >
                  {!msg.isMe && (
                    <Avatar src={selectedConversation.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
                  )}
                  <Box
                    sx={{
                      maxWidth: '70%',
                      bgcolor: msg.isMe ? 'primary.light' : (theme) => theme.palette.action.hover,
                      color: msg.isMe ? 'white' : 'text.primary',
                      p: 1.5,
                      borderRadius: '10px',
                      borderBottomLeftRadius: msg.isMe ? '10px' : '2px',
                      borderBottomRightRadius: msg.isMe ? '2px' : '10px',
                      position: 'relative',
                      pr: 5,
                    }}
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                    <Typography
                      variant="caption"
                      color={msg.isMe ? 'rgba(255,255,255,0.7)' : 'text.secondary'}
                      sx={{
                        position: 'absolute',
                        bottom: 4,
                        right: 8,
                        fontSize: '0.65rem',
                      }}
                    >
                      {msg.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
              <div ref={messagesEndRef} />
            </Box>

            {/* Message Input Area */}
            <Box sx={{ p: 2, borderTop: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
              <InputBase
                placeholder="Write a message..."
                multiline
                rows={1}
                maxRows={4}
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                sx={{
                  flexGrow: 1,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  borderRadius: '20px',
                  p: '8px 16px',
                  mr: 1,
                }}
              />
              <IconButton size="medium" sx={{ color: 'text.secondary', mr: 0.5 }}>
                <AttachFileIcon />
              </IconButton>
              <IconButton size="medium" sx={{ color: 'text.secondary', mr: 0.5 }}>
                <EmojiEmotionsIcon />
              </IconButton>
              <IconButton size="medium" color="primary" onClick={handleSendMessage} disabled={!messageInput.trim()}>
                <SendIcon />
              </IconButton>
            </Box>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
            <Typography variant="h6" color="text.secondary">
              Select a conversation to start chatting.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default MessagingPage;