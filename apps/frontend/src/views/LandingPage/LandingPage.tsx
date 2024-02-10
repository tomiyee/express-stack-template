import { Stack, Typography } from '@mui/material';

const LandingPage: React.FC = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h1">Welcome to the Todo List</Typography>
      <Typography variant="body1">
        This is a simple todo list application.
      </Typography>
    </Stack>
  );
};
export default LandingPage;
