// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
      light: '#757de8',
      dark: '#002984',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#ffffff'
    },
    background: {
      default: '#f5f5f5'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem'
      }
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;