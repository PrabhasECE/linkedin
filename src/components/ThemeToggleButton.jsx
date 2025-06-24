import React, { useContext } from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon for light mode
import ColorModeContext from '../ThemeContext'; // Context for theme toggling

/**
 * A button component that allows users to toggle between light and dark themes.
 * It uses the Material-UI `useTheme` hook to determine the current theme mode
 * and `useContext` to access the `toggleColorMode` function from `ColorModeContext`.
 */
function ThemeToggleButton() {
  const theme = useTheme(); // Get the current theme object
  const colorMode = useContext(ColorModeContext); // Access the theme context to get the toggle function

  return (
    <IconButton
      sx={{
        mx: 1, // Horizontal margin
        color: theme.palette.text.primary, // Ensure icon color contrasts with AppBar background
      }}
      onClick={colorMode.toggleColorMode} // Call the context function to change theme
    >
      {/* Renders a sun icon for dark mode (to switch to light) and a moon icon for light mode (to switch to dark) */}
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ThemeToggleButton;