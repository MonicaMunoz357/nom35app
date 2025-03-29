import React, { useState } from 'react';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Link,
    Divider,
    IconButton,
    InputAdornment,
    useTheme
} from '@mui/material';
import { 
    Visibility, 
    VisibilityOff,
    Lock,
    Email,
    Google,
    Facebook
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticación aquí
        console.log('Email:', email, 'Password:', password);
        navigate('/dashboard');
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: `
                linear-gradient(175deg, #f5f9ff 0%, #e3f2fd 100%)
            `,
            py: 8
        }}>
            <Container maxWidth="sm">
                <Box sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(25, 118, 210, 0.1)',
                    overflow: 'hidden',
                    border: '1px solid #e0e0e0'
                }}>
                    {/* Encabezado */}
                    <Box sx={{
                        py: 4,
                        px: 4,
                        textAlign: 'center',
                        backgroundColor: '#f5f9ff',
                        borderBottom: '1px solid #e0e0e0'
                    }}>
                        <Box
                            component="img"
                            src="/src/assets/logo_nom035.png"
                            alt="Logo NOM-035"
                            sx={{ height: 50, mb: 2 }}
                        />
                        <Typography variant="h4" sx={{ 
                            fontWeight: 700,
                            color: '#0d47a1',
                            mb: 1
                        }}>
                            Iniciar Sesión
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#616161' }}>
                            Ingresa tus credenciales para acceder a la plataforma
                        </Typography>
                    </Box>

                    {/* Formulario */}
                    <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email sx={{ color: '#1976d2' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                mb: 3,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1976d2',
                                    },
                                }
                            }}
                        />

                        <TextField
                            fullWidth
                            label="Contraseña"
                            variant="outlined"
                            margin="normal"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#1976d2' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                mb: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1976d2',
                                    },
                                }
                            }}
                        />

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            mb: 3
                        }}>
                            <Link 
                                href="#" 
                                underline="hover" 
                                sx={{ 
                                    color: '#1976d2',
                                    fontWeight: 500,
                                    '&:hover': {
                                        color: '#0d47a1'
                                    }
                                }}
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            size="large"
                            sx={{
                                py: 1.5,
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                                '&:hover': {
                                    boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)',
                                    transform: 'translateY(-2px)',
                                    backgroundColor: '#1565c0'
                                },
                                transition: 'all 0.3s ease',
                                fontWeight: 600,
                                backgroundColor: '#1976d2',
                                fontSize: '1rem',
                                textTransform: 'none'
                            }}
                        >
                            Iniciar Sesión
                        </Button>

                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            mb: 3
                        }}>
                          
                           
                        </Box>

                        
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;