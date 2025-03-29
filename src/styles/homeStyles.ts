// src/styles/homeStyles.ts
import { Theme } from '@mui/material/styles';

export const homeStyles = (theme: Theme) => ({
  heroSection: {
    background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 2),
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh', // Asegura que ocupe todo el alto de la pantalla
  },
  appBar: {
    backgroundColor: 'white', // Fondo blanco
    color: theme.palette.primary.main, 
  },
  featureCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    textAlign: 'center', // Centra el contenido dentro de las tarjetas
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  ctaButton: {
    fontSize: '1.1rem',
    padding: theme.spacing(1.5, 4),
    marginTop: theme.spacing(3),
  },
  testimonialCard: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center', // Centra el texto dentro de las tarjetas de testimonios
  },
  howItWorksSection: {
    backgroundColor: theme.palette.grey[50],
    padding: theme.spacing(8, 2),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepAvatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    width: 56,
    height: 56,
    fontSize: '1.5rem',
    marginBottom: theme.spacing(2),
  },
  callToAction: {
    padding: theme.spacing(10, 2),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});