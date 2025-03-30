import { Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';

const options = [
  { value: 'always', label: 'Siempre' },
  { value: 'almost_always', label: 'Casi siempre' },
  { value: 'sometimes', label: 'Algunas veces' },
  { value: 'almost_never', label: 'Casi nunca' },
  { value: 'never', label: 'Nunca' },
];

const ResponseOptions = ({ questionId, handleResponse, selectedValue }) => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', py: 1 }}>
      <RadioGroup
        row
        aria-label={`question-${questionId}`}
        name={`question-${questionId}`}
        value={selectedValue}
        onChange={(e) => handleResponse(questionId, e.target.value)}
      >
        {options.map((option) => (
          <FormControlLabel
            key={`${questionId}-${option.value}`}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
            sx={{ mx: 1 }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default ResponseOptions;