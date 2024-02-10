import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout: React.FC = () => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Outlet />
    </Box>
  );
};
export default MainLayout;
