import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  Box,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import Swal from 'sweetalert2';

// Solo incluir las primeras 12 secciones (hasta violencia laboral)
const sections = [
  {
    title: "Para responder las preguntas siguientes considere las condiciones ambientales de su centro de trabajo.",
    questions: [
      { id: 1, text: "El espacio donde trabajo me permite realizar mis actividades de manera segura e higiénica" },
      { id: 2, text: "Mi trabajo me exige hacer mucho esfuerzo físico" },
      { id: 3, text: "Me preocupa sufrir un accidente en mi trabajo" },
      { id: 4, text: "Considero que en mi trabajo se aplican las normas de seguridad y salud en el trabajo" },
      { id: 5, text: "Considero que las actividades que realizo son peligrosas" }
    ]
  },
  {
    title: "Para responder a las preguntas siguientes piense en la cantidad y ritmo de trabajo que tiene.",
    questions: [
      { id: 6, text: "Por la cantidad de trabajo que tengo debo quedarme tiempo adicional a mi turno" },
      { id: 7, text: "Por la cantidad de trabajo que tengo debo trabajar sin parar" },
      { id: 8, text: "Considero que es necesario mantener un ritmo de trabajo acelerado" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con el esfuerzo mental que le exige su trabajo.",
    questions: [
      { id: 9, text: "Mi trabajo exige que esté muy concentrado" },
      { id: 10, text: "Mi trabajo requiere que memorice mucha información" },
      { id: 11, text: "En mi trabajo tengo que tomar decisiones difíciles muy rápido" },
      { id: 12, text: "Mi trabajo exige que atienda varios asuntos al mismo tiempo" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con las actividades que realiza en su trabajo y las responsabilidades que tiene.",
    questions: [
      { id: 13, text: "En mi trabajo soy responsable de cosas de mucho valor" },
      { id: 14, text: "Respondo ante mi jefe por los resultados de toda mi área de trabajo" },
      { id: 15, text: "En el trabajo me dan órdenes contradictorias" },
      { id: 16, text: "Considero que en mi trabajo me piden hacer cosas innecesarias" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con su jornada de trabajo.",
    questions: [
      { id: 17, text: "Trabajo horas extras más de tres veces a la semana" },
      { id: 18, text: "Mi trabajo me exige laborar en días de descanso, festivos o fines de semana" },
      { id: 19, text: "Considero que el tiempo en el trabajo es mucho y perjudica mis actividades familiares o personales" },
      { id: 20, text: "Debo atender asuntos de trabajo cuando estoy en casa" },
      { id: 21, text: "Pienso en las actividades familiares o personales cuando estoy en mi trabajo" },
      { id: 22, text: "Pienso que mis responsabilidades familiares afectan mi trabajo" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con las decisiones que puede tomar en su trabajo.",
    questions: [
      { id: 23, text: "Mi trabajo permite que desarrolle nuevas habilidades" },
      { id: 24, text: "En mi trabajo puedo aspirar a un mejor puesto" },
      { id: 25, text: "Durante mi jornada de trabajo puedo tomar pausas cuando las necesito" },
      { id: 26, text: "Puedo decidir cuánto trabajo realizo durante la jornada laboral" },
      { id: 27, text: "Puedo decidir la velocidad a la que realizo mis actividades en mi trabajo" },
      { id: 28, text: "Puedo cambiar el orden de las actividades que realizo en mi trabajo" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con cualquier tipo de cambio que ocurra en su trabajo (considere los últimos cambios realizados).",
    questions: [
      { id: 29, text: "Los cambios que se presentan en mi trabajo dificultan mi labor" },
      { id: 30, text: "Cuando se presentan cambios en mi trabajo se tienen en cuenta mis ideas o aportaciones" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con la capacitación e información que se le proporciona sobre su trabajo.",
    questions: [
      { id: 31, text: "Me informan con claridad cuáles son mis funciones" },
      { id: 32, text: "Me explican claramente los resultados que debo obtener en mi trabajo" },
      { id: 33, text: "Me explican claramente los objetivos de mi trabajo" },
      { id: 34, text: "Me informan con quién puedo resolver problemas o asuntos de trabajo" },
      { id: 35, text: "Me permiten asistir a capacitaciones relacionadas con mi trabajo" },
      { id: 36, text: "Recibo capacitación útil para hacer mi trabajo" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con el o los jefes con quien tiene contacto.",
    questions: [
      { id: 37, text: "Mi jefe ayuda a organizar mejor el trabajo" },
      { id: 38, text: "Mi jefe tiene en cuenta mis puntos de vista y opiniones" },
      { id: 39, text: "Mi jefe me comunica a tiempo la información relacionada con el trabajo" },
      { id: 40, text: "La orientación que me da mi jefe me ayuda a realizar mejor mi trabajo" },
      { id: 41, text: "Mi jefe ayuda a solucionar los problemas que se presentan en el trabajo" }
    ]
  },
  {
    title: "Las preguntas siguientes se refieren a las relaciones con sus compañeros.",
    questions: [
      { id: 42, text: "Puedo confiar en mis compañeros de trabajo" },
      { id: 43, text: "Entre compañeros solucionamos los problemas de trabajo de forma respetuosa" },
      { id: 44, text: "En mi trabajo me hacen sentir parte del grupo" },
      { id: 45, text: "Cuando tenemos que realizar trabajo de equipo los compañeros colaboran" },
      { id: 46, text: "Mis compañeros de trabajo me ayudan cuando tengo dificultades" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con la información que recibe sobre su rendimiento en el trabajo, el reconocimiento, el sentido de pertenencia y la estabilidad que le ofrece su trabajo.",
    questions: [
      { id: 47, text: "Me informan sobre lo que hago bien en mi trabajo" },
      { id: 48, text: "La forma como evalúan mi trabajo en mi centro de trabajo me ayuda a mejorar mi desempeño" },
      { id: 49, text: "En mi centro de trabajo me pagan a tiempo mi salario" },
      { id: 50, text: "El pago que recibo es el que merezco por el trabajo que realizo" },
      { id: 51, text: "Si obtengo los resultados esperados en mi trabajo me recompensan o reconocen" },
      { id: 52, text: "Las personas que hacen bien el trabajo pueden crecer laboralmente" },
      { id: 53, text: "Considero que mi trabajo es estable" },
      { id: 54, text: "En mi trabajo existe continua rotación de personal" },
      { id: 55, text: "Siento orgullo de laborar en este centro de trabajo" },
      { id: 56, text: "Me siento comprometido con mi trabajo" }
    ]
  },
  {
    title: "Las preguntas siguientes están relacionadas con actos de violencia laboral (malos tratos, acoso, hostigamiento, acoso psicológico).",
    questions: [
      { id: 57, text: "En mi trabajo puedo expresarme libremente sin interrupciones" },
      { id: 58, text: "Recibo críticas constantes a mi persona y/o trabajo" },
      { id: 59, text: "Recibo burlas, calumnias, difamaciones, humillaciones o ridiculizaciones" },
      { id: 60, text: "Se ignora mi presencia o se me excluye de las reuniones de trabajo y en la toma de decisiones" },
      { id: 61, text: "Se manipulan las situaciones de trabajo para hacerme parecer un mal trabajador" },
      { id: 62, text: "Se ignoran mis éxitos laborales y se atribuyen a otros trabajadores" },
      { id: 63, text: "Me bloquean o impiden las oportunidades que tengo para obtener ascenso o mejora en mi trabajo" },
      { id: 64, text: "He presenciado actos de violencia en mi centro de trabajo" }
    ]
  }
];

const Nom035LimitedForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [responses, setResponses] = useState({});

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    console.log('Respuestas:', responses);
    
    Swal.fire({
      title: '¡Formulario enviado!',
      text: 'El cuestionario NOM-035 ha sido enviado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#1976d2',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes redirigir a otra página o hacer alguna acción adicional
      }
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ 
          mb: 4, 
          textAlign: 'center', 
          color: '#0d47a1',
          fontWeight: 'bold',
          borderBottom: '2px solid #1976d2',
          pb: 2
        }}>
          CUESTIONARIO NOM-035
        </Typography>

        <Box sx={{ 
          backgroundColor: '#f5f9ff', 
          p: 3, 
          mb: 4,
          borderRadius: '8px',
          borderLeft: '4px solid #1976d2'
        }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#0d47a1' }}>
            INSTRUCCIONES:
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            1. Lea cuidadosamente cada pregunta.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            2. Marque con una "X" (seleccionando el círculo) la opción que mejor describa su situación.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            3. Considere las condiciones de los últimos dos meses.
          </Typography>
          <Typography variant="body1">
            4. No hay respuestas correctas o incorrectas. Sea honesto en sus respuestas.
          </Typography>
        </Box>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {sections.map((section, index) => (
            <Step key={index}>
              <StepLabel>{`Sección ${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h5" sx={{ 
          mb: 3, 
          fontWeight: 'bold', 
          color: '#1976d2',
          backgroundColor: '#e3f2fd',
          p: 2,
          borderRadius: '4px'
        }}>
          {sections[activeStep].title}
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4, overflowX: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976d2' }}>
                <TableCell sx={{ 
                  width: '60px', 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem'
                }}>No.</TableCell>
                <TableCell sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem'
                }}>Pregunta</TableCell>
                <TableCell align="center" sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem',
                  minWidth: '100px'
                }}>Siempre</TableCell>
                <TableCell align="center" sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem',
                  minWidth: '100px'
                }}>Casi siempre</TableCell>
                <TableCell align="center" sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem',
                  minWidth: '100px'
                }}>Algunas veces</TableCell>
                <TableCell align="center" sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem',
                  minWidth: '100px'
                }}>Casi nunca</TableCell>
                <TableCell align="center" sx={{ 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontSize: '0.875rem',
                  minWidth: '100px'
                }}>Nunca</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sections[activeStep].questions.map((question) => (
                <TableRow key={question.id} hover>
                  <TableCell sx={{ 
                    fontWeight: 'bold',
                    borderRight: '1px solid #e0e0e0'
                  }}>{question.id}</TableCell>
                  <TableCell sx={{ 
                    borderRight: '1px solid #e0e0e0'
                  }}>{question.text}</TableCell>
                  {['always', 'almost_always', 'sometimes', 'almost_never', 'never'].map((value) => (
                    <TableCell 
                      key={value} 
                      align="center"
                      sx={{ 
                        borderRight: '1px solid #e0e0e0',
                        '&:last-child': {
                          borderRight: 'none'
                        }
                      }}
                    >
                      <Radio
                        checked={responses[question.id] === value}
                        onChange={() => handleResponse(question.id, value)}
                        value={value}
                        name={`question-${question.id}`}
                        color="primary"
                        size="small"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          mt: 4,
          pt: 3,
          borderTop: '1px solid #e0e0e0'
        }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ 
              minWidth: '120px',
              fontWeight: 'bold',
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px'
              }
            }}
          >
            Anterior
          </Button>
          
          {activeStep === sections.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ 
                minWidth: '120px',
                fontWeight: 'bold',
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              Enviar
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ 
                minWidth: '120px',
                fontWeight: 'bold',
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              Siguiente
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Nom035LimitedForm;