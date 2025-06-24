import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import PersonCard from './PersonCard';


const ConnectionSuggestionSection = ({ title, people }) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper', 
        borderRadius: '8px',         
        p: 3,                        
        mb: 4,                       
        boxShadow: 1,                
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Header for the section: Title and "Show all" button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Button variant="text" sx={{ textTransform: 'none', color: 'primary.main' }}>
          Show all
        </Button>
      </Box>

      {/* Grid to display individual person cards */}
      <Grid container spacing={2}>
        {people.map((person) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={person.id}>
            <PersonCard person={person} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConnectionSuggestionSection;