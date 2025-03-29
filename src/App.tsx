// src/App.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import HomePage from './pages/HomePage';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Otras rutas pueden ir aquí */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;