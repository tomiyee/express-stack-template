import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { assertUnreached } from 'common';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

enum LoginMode {
  LOGIN,
  REGISTER,
}
/**
 * The contexxt for the current login page
 */
const LoginContext = createContext<(arg0: LoginMode) => void>(() => {});

const LoginView: React.FC = () => {
  const navigate = useNavigate();
  const [loginMode, setLoginMode] = useState(LoginMode.LOGIN);
  const loggedIn = false;
  useEffect(() => {
    if (loggedIn) navigate('/dashboard');
  }, [loggedIn, navigate]);
  return (
    <LoginContext.Provider value={setLoginMode}>
      <Box p={2} display="flex" justifyContent="center">
        <Card sx={{ maxWidth: '400px' }}>
          <CardContent>
            <Stack spacing={1}>
              {loginMode === LoginMode.LOGIN ? (
                <LoginForm />
              ) : loginMode === LoginMode.REGISTER ? (
                <SignupForm />
              ) : (
                assertUnreached(loginMode)
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </LoginContext.Provider>
  );
};
export default LoginView;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const setMode = useContext(LoginContext);
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Log In</Typography>
      <Alert severity="warning">
        For now, passwords are stored insecurely. Do not use a real password.
      </Alert>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained" onClick={() => navigate('/dashboard')}>
        Log in
      </Button>
      <Button onClick={() => setMode(LoginMode.REGISTER)}>
        Don't have an account?
      </Button>
    </Stack>
  );
};

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const setMode = useContext(LoginContext);
  return (
    <Stack spacing={2}>
      <Typography variant="h1">Sign Up</Typography>
      <Alert severity="warning">
        For now, passwords are stored insecurely. Do not use a real password.
      </Alert>
      <TextField label="Username" />
      <TextField label="Password" />
      <TextField label="Confirm Password" />
      <Button variant="contained" onClick={() => navigate('/dashboard')}>
        Sign up
      </Button>
      <Button onClick={() => setMode(LoginMode.LOGIN)}>
        Already have an account?
      </Button>
    </Stack>
  );
};
