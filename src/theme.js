// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ACECF7', // Your primary color
    },
    secondary: {
      main: '#dc004e', // Your secondary color
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8, // Default spacing unit
});

export default theme;
