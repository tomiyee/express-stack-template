import { Box, CssBaseline, Stack, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import React from 'react';

const MainLayout: React.FC = () => {
  return (
    <Stack minHeight="100vh" maxHeight="100vh" width="100%">
      <CssBaseline />
      <Box flex={0}>
        <Header />
      </Box>
      <Main>
        <Outlet />
      </Main>
    </Stack>
  );
};
export default MainLayout;

const Main = styled('main')(({ theme }) => ({
  // This will always reserve space for the scrollbar to prevent
  // page flashes due to layout movement on scrollbar renders,
  // (mostly when images are rendered)
  scrollbarGutter: 'stable',
  background: theme.palette.background.default,
  flex: 1,
  overflow: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));
