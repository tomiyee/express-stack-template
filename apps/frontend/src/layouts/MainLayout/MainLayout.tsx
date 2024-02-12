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
  flex: 1,
  overflow: 'auto',
  paddingLeft: '16px',
  paddingRight: '16px',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
}));
