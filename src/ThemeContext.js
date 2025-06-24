// src/ThemeContext.js
import { createContext } from 'react';

// Create a context for the color mode (light/dark)
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default ColorModeContext;