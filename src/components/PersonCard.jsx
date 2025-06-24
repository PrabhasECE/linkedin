import React from 'react';
import {
  Box, Typography, Card, CardContent, CardActions,
  Button, IconButton, Avatar, CardMedia, useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/**
 * Renders a card displaying a person's profile for connection suggestions.
 * Includes a background image, profile picture, name, headline,
 * a "dismiss" button, and a "connect" button.
 */
const PersonCard = ({ person }) => {
  const theme = useTheme();

  /**
   * Handles the dismissal of the card.
   * In a real application, this would update state or call an API to remove the suggestion.
   */
  const handleDismiss = () => {
    console.log(`Dismissing ${person.name}`);
  };

  /**
   * Handles the "Connect" action for the person.
   * In a real application, this would send a connection request via an API.
   */
  const handleConnect = () => {
    console.log(`Connecting with ${person.name}`);
  };

  return (
    <Card sx={{
      position: 'relative',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: theme.shadows[1],
      height: 340,
      maxWidth: 280,
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
    }}>
      {/* Dismiss Button positioned absolutely at the top right */}
      <IconButton
        aria-label="dismiss"
        size="small"
        onClick={handleDismiss}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          bgcolor: 'rgba(0,0,0,0.4)',
          color: 'white',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.6)',
          },
          zIndex: 10,
        }}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>

      {/* Background Image of the card */}
      <CardMedia
        component="img"
        height="80"
        image={person.backgroundImg}
        alt="Card background"
        sx={{ objectFit: 'cover' }}
      />

      {/* Main Content Area */}
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        pt: 0,
        px: 1.5,
      }}>
        {/* Profile Avatar with "Open to Work" Badge */}
        <Box sx={{
          position: 'relative',
          mt: '-32px',
          mb: 1.5,
        }}>
          <Avatar
            alt={person.name}
            src={person.profilePic}
            sx={{
              width: 80,
              height: 80,
              border: `2px solid ${theme.palette.background.paper}`,
              boxShadow: theme.shadows[1],
            }}
          />
          {/* Open to Work Badge */}
          {person.openToWork && (
            <Box
              sx={{
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: '#91C9D9',
                color: 'black',
                borderRadius: '4px',
                px: 0.5,
                py: 0.2,
                fontSize: '0.65rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '90%',
              }}
            >
              #OPENTOWORK
            </Box>
          )}
        </Box>

        {/* Person's Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            mb: 0.5,
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxWidth: '100%',
          }}
        >
          {person.name}
          {/* Verified icon if applicable */}
          {person.verified && (
            <CheckCircleIcon sx={{ fontSize: '0.8em', verticalAlign: 'text-top', ml: 0.5, color: theme.palette.primary.main }} />
          )}
        </Typography>

        {/* Person's Headline */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1.5,
            minHeight: '2.8em',
            maxHeight: '2.8em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {person.headline}
        </Typography>
        {/* Source of suggestion */}
        <Typography variant="caption" color="text.secondary" sx={{ mt: 'auto', mb: 1.5 }}>
          Based on your profile
        </Typography>
      </CardContent>

      {/* Connect Button */}
      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            borderRadius: '20px',
            textTransform: 'none',
            px: 3,
            py: 0.8,
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.dark,
              bgcolor: theme.palette.action.hover,
            },
          }}
          onClick={handleConnect}
        >
          Connect
        </Button>
      </CardActions>
    </Card>
  );
};

export default PersonCard;