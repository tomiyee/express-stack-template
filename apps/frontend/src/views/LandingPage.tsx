import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack pt={2} spacing={1} alignItems="center" justifyContent="center">
      <Typography variant="h1">Welcome to the Todo List</Typography>
      <Typography variant="body1">
        This is a simple todo list application.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/login')}>
        Create an Account!
      </Button>
    </Stack>
  );
};
export default LandingPage;
