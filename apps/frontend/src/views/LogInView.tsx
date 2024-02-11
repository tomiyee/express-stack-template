import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import { assertUnreached } from 'common';
import React, { useState } from 'react';

enum LoginMode {
  LOGIN,
  REGISTER,
}

const LoginView: React.FC = () => {
  const [loginMode, setLoginMode] = useState(LoginMode.LOGIN);
  return (
    <Stack spacing={1}>
      <Typography variant="h1">Welcome to the Todo List</Typography>
      {loginMode === LoginMode.LOGIN ? (
        <LoginForm setMode={setLoginMode} />
      ) : loginMode === LoginMode.REGISTER ? (
        <SignupForm setMode={setLoginMode} />
      ) : (
        assertUnreached(loginMode)
      )}
    </Stack>
  );
};
export default LoginView;

const LoginForm: React.FC<{ setMode: (arg0: LoginMode) => void }> = ({
  setMode,
}) => {
  return (
    <Stack>
      <Alert severity="warning">
        For now, passwords are stored insecurely. Do not use a real password.
      </Alert>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained">Log in</Button>
      <Button onClick={() => setMode(LoginMode.REGISTER)}>
        Don't have an account?
      </Button>
    </Stack>
  );
};

const SignupForm: React.FC<{ setMode: (arg0: LoginMode) => void }> = ({
  setMode,
}) => {
  return (
    <Stack>
      <TextField label="Username" />
      <TextField label="Password" />
      <Button variant="contained">Sign up</Button>
      <Button onClick={() => setMode(LoginMode.LOGIN)}>
        Already have an account?
      </Button>
    </Stack>
  );
};
