import React from 'react';
import { Box, Card, Avatar, Typography } from '@mui/material';

function HomeUserProfileCard({ userProfile }) {
  // Render nothing if userProfile data is not provided or is null/undefined
  if (!userProfile) {
    return null;
  }

  return (
    <Card
      sx={{
        p: 2,                     
        mb: 2,                    
        borderRadius: '8px',      
        boxShadow: 1,            
        textAlign: 'center',      
        position: 'relative',     // Needed for absolute positioning of background
        overflow: 'hidden',       
      }}
    >
      {/* Background banner placeholder (like LinkedIn's profile banner) */}
      <Box
        sx={{
          position: 'absolute', // Positioned relative to the parent Card
          top: 0,
          left: 0,
          width: '100%',
          height: 60,             // Fixed height for the banner area
          bgcolor: 'text.secondary', // Placeholder background color
          opacity: 0.2,           // Semi-transparent overlay
        }}
      />

      {/* Main profile content (positioned above the background banner) */}
      <Box sx={{ mt: 2, position: 'relative', zIndex: 1 }}>
        <Avatar
          src={userProfile.avatarSrc} // User's profile picture URL
          alt={userProfile.name}     
          sx={{
            width: 72, height: 72, 
            bgcolor: userProfile.avatarColor, // Background color if image fails or initials are shown
            fontSize: '2rem',     
            fontWeight: 'bold',   
            mx: 'auto',           // Center the avatar horizontally
            mb: 1,                // Margin below avatar
            border: (theme) => `2px solid ${theme.palette.background.paper}`, // White border around avatar
          }}
        >
          {/* Displays initials if avatarSrc is not provided or fails to load */}
          {!userProfile.avatarSrc && userProfile.avatarInitial}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
          {userProfile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {userProfile.headline}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
          {userProfile.location}
        </Typography>

        {/* Education/Other details section */}
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            {userProfile.education}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default HomeUserProfileCard;