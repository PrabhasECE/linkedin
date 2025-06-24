import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import LinkedInHeader from './components/Header';
import MyNetworkPage from './pages/MyNetworkPage';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MessagingPage from './pages/MessagingPage'; 
import NotificationsPage from './pages/NotificationsPage'; 
import ColorModeContext from './ThemeContext';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#0A66C2' },
          secondary: { main: '#666666' },
          background: {
            default: mode === 'light' ? '#F4F2EE' : '#282828',
            paper: mode === 'light' ? '#FFFFFF' : '#3A3A3A',
          },
          text: {
            primary: mode === 'light' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            secondary: mode === 'light' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          },
          divider: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
        },
        typography: {
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          h6: { fontSize: '1rem', fontWeight: 600 },
          body2: { fontSize: '0.875rem' },
          caption: { fontSize: '0.75rem' },
        },
        components: {
          MuiCssBaseline: { styleOverrides: { body: { transition: 'background-color 0.3s ease, color 0.3s ease' } } },
          MuiButton: { styleOverrides: { root: { textTransform: 'none' } } },
          MuiAppBar: { styleOverrides: { root: { boxShadow: '0 1px 0 rgba(0,0,0,0.08)', transition: 'background-color 0.3s ease' } } },
          MuiCard: { styleOverrides: { root: { transition: 'background-color 0.3s ease' } } },
          MuiTypography: { styleOverrides: { root: { transition: 'color 0.3s ease' } } },
          MuiSvgIcon: { styleOverrides: { root: { transition: 'color 0.3s ease' } } },
          MuiIconButton: { styleOverrides: { root: { transition: 'color 0.3s ease' } } }
        },
      }),
    [mode],
  );

  const appBarHeight = 52;
  const gapHeight = 16;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
          <LinkedInHeader />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mt: `${appBarHeight + gapHeight}px`,
              height: `calc(100vh - ${appBarHeight + gapHeight}px)`,
              overflowY: 'auto'
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mynetwork" element={<MyNetworkPage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/messaging" element={<MessagingPage />} /> 
              <Route path="/notifications" element={<NotificationsPage />} /> 
              <Route path="/profile" element={<ProfilePage />} /> 
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;