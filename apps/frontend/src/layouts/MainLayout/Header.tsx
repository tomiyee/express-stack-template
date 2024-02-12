import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import ProfileSection from './ProfileSection';
import { Home } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Box display="flex" width="100%" justifyContent="space-between">
          <IconButton>
            <Home />
          </IconButton>
          <ProfileSection />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
