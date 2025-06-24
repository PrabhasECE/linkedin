// src/theme.js
import { amber, deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette for light mode
          primary: {
            main: '#0A66C2', // LinkedIn blue
          },
          secondary: {
            main: '#666666',
          },
          divider: grey[300],
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
          background: {
            default: grey[100],
            paper: '#FFFFFF',
          },
        }
      : {
          // palette for dark mode
          primary: {
            main: '#0A66C2', // LinkedIn blue still
          },
          secondary: {
            main: grey[400],
          },
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[800],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: [
      'system-ui',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'Liberation Sans',
      'sans-serif',
    ].join(','),
  },
  // You can add more theme customizations here
});