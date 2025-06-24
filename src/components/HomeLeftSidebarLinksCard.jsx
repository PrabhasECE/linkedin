import React from 'react'; 
import { Card, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// Import Material-UI icons used within this card
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import NewspaperIcon from '@mui/icons-material/Newspaper';

/**
 * Renders a card for the left sidebar containing a list of links
 * such as "Saved items", "Groups", and "Newsletters".
 * This component provides common navigation or quick access links.
 */
function HomeLeftSidebarLinksCard() {
  return (
    <Card
      sx={{
        mt: 1, // Margin top to separate from the component above
        p: 2,  // Internal padding
        borderRadius: '8px', // Rounded corners
        boxShadow: 0, // No shadow for a flat look
      }}
    >
      <List disablePadding>
        {/* Saved items link */}
        <ListItem button sx={{ py: 0.5, px: 0 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <BookmarkIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Saved items" primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }} />
        </ListItem>

        {/* Groups link */}
        <ListItem button sx={{ py: 0.5, px: 0 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <GroupIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Groups" primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }} />
        </ListItem>

        {/* Newsletters link */}
        <ListItem button sx={{ py: 0.5, px: 0 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <NewspaperIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Newsletters" primaryTypographyProps={{ variant: 'body2', fontWeight: 'medium' }} />
        </ListItem>
      </List>
    </Card>
  );
}

export default HomeLeftSidebarLinksCard;