import { Typography, Box, Divider } from '@mui/material';
import ResponseOptions from './ResponseOptions';

const QuestionSection = ({ title, questions, handleResponse, responses }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#0d47a1' }}>
        {title}
      </Typography>
      <Divider sx={{ mb: 3 }} />
      {questions.map((question, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
            {question.text}
          </Typography>
          <ResponseOptions
            questionId={question.id}
            handleResponse={handleResponse}
            selectedValue={responses[question.id] || ''}
          />
        </Box>
      ))}
    </Box>
  );
};

export default QuestionSection;