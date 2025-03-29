import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    useTheme,
    Container
} from '@mui/material';
import {
    Assessment,
    Security,
    TrendingUp,
    Group
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const features = [
        {
            icon: <Assessment fontSize="inherit" />,
            title: 'Cuestionarios Validados',
            description: 'Instrumentos estandarizados según la NOM-035-STPS-2018'
        },
        {
            icon: <Security fontSize="inherit" />,
            title: 'Confidencialidad Garantizada',
            description: 'Tus respuestas son anónimas y protegidas'
        },
        {
            icon: <TrendingUp fontSize="inherit" />,
            title: 'Resultados Inmediatos',
            description: 'Análisis automatizado de riesgo psicosocial'
        }
    ];

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Navigation Bar */}
            <AppBar position="fixed" sx={{ 
                backgroundColor: '#ffffff',
                boxShadow: '0 1px 10px rgba(0,0,0,0.08)',
                color: theme.palette.text.primary,
                py: 1
            }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Box
                            component="img"
                            src="/src/assets/logo_nom035.png"
                            alt="Logo NOM-035"
                            sx={{ height: 36, mr: 2 }}
                        />
                        <Typography variant="h6" sx={{ 
                            flexGrow: 1, 
                            fontWeight: 700,
                            color: '#1976d2' // Azul primario
                        }}>
                            NOM-035
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button 
                                color="inherit" 
                                onClick={() => navigate('/')}
                                sx={{ 
                                    fontWeight: 500,
                                    color: theme.palette.text.primary,
                                    '&:hover': {
                                        color: '#1976d2'
                                    }
                                }}
                            >
                                Inicio
                            </Button>
                            <Button 
                                color="inherit" 
                                onClick={() => navigate('/about')}
                                sx={{ 
                                    fontWeight: 500,
                                    color: theme.palette.text.primary,
                                    '&:hover': {
                                        color: '#1976d2'
                                    }
                                }}
                            >
                                Acerca de
                            </Button>
                            <Button 
                                variant="contained"
                                onClick={() => navigate('/login')}
                                sx={{ 
                                    fontWeight: 600,
                                    backgroundColor: '#1976d2',
                                    color: '#fff',
                                    borderRadius: '8px',
                                    px: 3,
                                    '&:hover': {
                                        backgroundColor: '#1565c0'
                                    }
                                }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main Content */}
            <Box component="main" sx={{ flex: 1 }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        height: '100vh',
                        background: `
                            linear-gradient(175deg, #f5f9ff 0%, #e3f2fd 100%)
                        `,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        px: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        pt: '64px',
                        borderBottom: `1px solid ${theme.palette.divider}`
                    }}
                >
                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                        <Typography 
                            variant="h2" 
                            gutterBottom 
                            sx={{ 
                                fontWeight: 800,
                                mb: 3,
                                fontSize: { xs: '2.25rem', sm: '3rem', md: '3.5rem' },
                                lineHeight: 1.2,
                                color: '#0d47a1', // Azul oscuro
                                letterSpacing: '-0.5px'
                            }}
                        >
                            Bienvenido a NOM-035
                        </Typography>
                        <Typography 
                            variant="h5" 
                            gutterBottom 
                            sx={{ 
                                mb: 4,
                                fontWeight: 400,
                                maxWidth: '700px',
                                margin: '0 auto',
                                fontSize: { xs: '1.15rem', md: '1.35rem' },
                                color: '#424242', // Gris oscuro
                                lineHeight: 1.6
                            }}
                        >
                            La plataforma líder para evaluar y mejorar el bienestar laboral en tu organización.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 4 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={() => navigate('/start')}
                                sx={{ 
                                    py: 1.5,
                                    px: 4,
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                                    '&:hover': {
                                        boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)',
                                        transform: 'translateY(-2px)',
                                        backgroundColor: '#1565c0'
                                    },
                                    transition: 'all 0.3s ease',
                                    fontWeight: 600,
                                    minWidth: '180px',
                                    backgroundColor: '#1976d2'
                                }}
                                startIcon={<Group sx={{ fontSize: '1.25rem' }} />}
                            >
                                Comenzar
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                onClick={() => navigate('/about')}
                                sx={{ 
                                    py: 1.5,
                                    px: 4,
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    borderWidth: '2px',
                                    borderColor: '#1976d2',
                                    color: '#1976d2',
                                    '&:hover': {
                                        borderWidth: '2px',
                                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                                    },
                                    transition: 'all 0.3s ease',
                                    fontWeight: 600,
                                    minWidth: '180px'
                                }}
                            >
                                Conoce más
                            </Button>
                        </Box>
                    </Container>
                </Box>

                {/* Features Section - Sin círculos morados */}
                <Box sx={{ 
                    py: { xs: 8, md: 12 },
                    backgroundColor: '#ffffff'
                }}>
                    <Container maxWidth="lg">
                        <Typography 
                            variant="h3" 
                            sx={{ 
                                mb: 2, 
                                fontWeight: 700,
                                textAlign: 'center',
                                color: '#0d47a1' // Azul oscuro
                            }}
                        >
                            Nuestra Plataforma
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mb: 6,
                                textAlign: 'center',
                                color: '#616161', // Gris medio
                                maxWidth: '600px',
                                margin: '0 auto',
                                fontSize: '1.1rem'
                            }}
                        >
                            Herramientas diseñadas para cumplir con los estándares de bienestar laboral
                        </Typography>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                            gap: 4,
                            mt: 6
                        }}>
                            {features.map((feature, index) => (
                                <Box 
                                    key={index} 
                                    sx={{
                                        p: 4,
                                        borderRadius: '12px',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                                        textAlign: 'center',
                                        border: `1px solid #e0e0e0`,
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 12px 28px rgba(25, 118, 210, 0.12)',
                                            borderColor: '#bbdefb'
                                        }
                                    }}
                                >
                                    {/* Icono sin círculo de fondo */}
                                    <Box sx={{ 
                                        fontSize: '2.5rem',
                                        color: '#1976d2', // Azul primario
                                        mb: 3
                                    }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography 
                                        variant="h5" 
                                        sx={{ 
                                            mb: 2, 
                                            fontWeight: 700,
                                            color: '#0d47a1' // Azul oscuro
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            color: '#616161', // Gris medio
                                            lineHeight: 1.7
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box sx={{ 
                    py: { xs: 8, md: 10 },
                    backgroundColor: '#e3f2fd', // Azul muy claro
                    textAlign: 'center'
                }}>
                    <Container maxWidth="md">
                        <Typography 
                            variant="h4" 
                            sx={{ 
                                mb: 3,
                                fontWeight: 700,
                                color: '#0d47a1' // Azul oscuro
                            }}
                        >
                            ¿Listo para comenzar?
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mb: 4,
                                color: '#0d47a1', // Azul oscuro
                                maxWidth: '600px',
                                margin: '0 auto',
                                fontSize: '1.1rem',
                                opacity: 0.9
                            }}
                        >
                            Regístrate ahora y comienza a evaluar el bienestar en tu organización en minutos.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => navigate('/start')}
                            sx={{ 
                                py: 1.5,
                                px: 5,
                                fontSize: '1rem',
                                borderRadius: '8px',
                                boxShadow: '0 4px 16px rgba(25, 118, 210, 0.2)',
                                '&:hover': {
                                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.3)',
                                    transform: 'translateY(-2px)',
                                    backgroundColor: '#1565c0'
                                },
                                transition: 'all 0.3s ease',
                                fontWeight: 600,
                                backgroundColor: '#1976d2'
                            }}
                        >
                            Comenzar Evaluación
                        </Button>
                    </Container>
                </Box>
            </Box>

            {/* Footer */}
            <Box 
                component="footer" 
                sx={{ 
                    py: 4,
                    backgroundColor: '#ffffff',
                    color: '#616161', // Gris medio
                    borderTop: `1px solid #e0e0e0`
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 0 } }}>
                            <Box
                                component="img"
                                src="/src/assets/logo_nom035.png"
                                alt="Logo"
                                sx={{ height: 30, mr: 2 }}
                            />
                            <Typography variant="body1" sx={{ fontWeight: 500, color: '#0d47a1' }}>
                                NOM-035
                            </Typography>
                        </Box>
                        <Typography variant="body2">
                            © {new Date().getFullYear()} Plataforma NOM-035. Todos los derechos reservados.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default HomePage;