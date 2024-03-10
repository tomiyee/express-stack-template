import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import ProfileSection from './ProfileSection';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Box display="flex" width="100%" justifyContent="space-between">
          <IconButton onClick={() => navigate('/')}>
            <Home />
          </IconButton>
          <ProfileSection />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
