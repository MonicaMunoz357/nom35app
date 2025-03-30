// src/App.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import HomePage from './pages/HomePage';
import Nom035Form from './pages/Nom035Form'; // Importa el nuevo componente
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/nom035" element={<Nom035Form />} /> {/* Nueva ruta */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;