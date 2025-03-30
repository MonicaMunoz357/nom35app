import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Divider,
  IconButton,
  useTheme
} from '@mui/material';
import {
  Edit,
  Save,
  CameraAlt,
  Lock,
  Email,
  Person,
  Work,
  Phone,
  LocationOn
} from '@mui/icons-material';
import Swal from 'sweetalert2';

const ProfilePage = () => {
  const theme = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Ejemplo',
    email: 'juan.perez@empresa.com',
    position: 'Gerente de Recursos Humanos',
    department: 'Recursos Humanos',
    phone: '+52 55 1234 5678',
    location: 'Ciudad de México',
    avatar: '/path/to/avatar.jpg'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    Swal.fire({
      title: '¡Perfil actualizado!',
      text: 'Tus cambios se han guardado correctamente.',
      icon: 'success',
      confirmButtonColor: theme.palette.primary.main,
    });
  };

  const handleAvatarChange = (e) => {
    // Lógica para cambiar el avatar
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserData(prev => ({
          ...prev,
          avatar: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: '16px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            Mi Perfil
          </Typography>
          {editMode ? (
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
              sx={{
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark
                }
              }}
            >
              Guardar Cambios
            </Button>
          ) : (
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={() => setEditMode(true)}
              sx={{
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.dark
                }
              }}
            >
              Editar Perfil
            </Button>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Sección de Avatar */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            minWidth: { xs: '100%', md: '300px' },
            mb: { xs: 4, md: 0 }
          }}>
            <Box sx={{ position: 'relative', mb: 2 }}>
              <Avatar
                src={userData.avatar}
                sx={{ 
                  width: 150, 
                  height: 150,
                  border: `4px solid ${theme.palette.primary.light}`,
                  boxShadow: theme.shadows[4]
                }}
              />
              {editMode && (
                <>
                  <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="avatar-upload"
                    type="file"
                    onChange={handleAvatarChange}
                  />
                  <label htmlFor="avatar-upload">
                    <IconButton
                      color="primary"
                      component="span"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        backgroundColor: theme.palette.primary.light,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main,
                          color: 'white'
                        }
                      }}
                    >
                      <CameraAlt />
                    </IconButton>
                  </label>
                </>
              )}
            </Box>
            
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              {userData.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, textAlign: 'center' }}>
              {userData.position}
            </Typography>
        
          </Box>

          {/* Sección de Información */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Person sx={{ mr: 1, color: theme.palette.primary.main }} />
              Información Personal
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 4 }}>
              <TextField
                label="Nombre Completo"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                disabled={!editMode}
                InputProps={{
                  startAdornment: <Person sx={{ color: theme.palette.action.disabled, mr: 1 }} />
                }}
                fullWidth
              />
              
              <TextField
                label="Correo Electrónico"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                disabled={!editMode}
                InputProps={{
                  startAdornment: <Email sx={{ color: theme.palette.action.disabled, mr: 1 }} />
                }}
                fullWidth
              />
              
              <TextField
                label="Teléfono"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                disabled={!editMode}
                InputProps={{
                  startAdornment: <Phone sx={{ color: theme.palette.action.disabled, mr: 1 }} />
                }}
                fullWidth
              />
              
              <TextField
                label="Ubicación"
                name="location"
                value={userData.location}
                onChange={handleInputChange}
                disabled={!editMode}
                InputProps={{
                  startAdornment: <LocationOn sx={{ color: theme.palette.action.disabled, mr: 1 }} />
                }}
                fullWidth
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
              <Work sx={{ mr: 1, color: theme.palette.primary.main }} />
              Información Laboral
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
              <TextField
                label="Puesto"
                name="position"
                value={userData.position}
                onChange={handleInputChange}
                disabled={!editMode}
                fullWidth
              />
              
              <TextField
                label="Departamento"
                name="department"
                value={userData.department}
                onChange={handleInputChange}
                disabled={!editMode}
                fullWidth
              />
            </Box>

            {editMode && (
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => setEditMode(false)}
                  sx={{
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark
                    }
                  }}
                >
                  Guardar Cambios
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;