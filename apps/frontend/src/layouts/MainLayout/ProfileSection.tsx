import { AccountCircle, Login, Logout } from '@mui/icons-material';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={() => setOpen(false)}
      >
        <MenuItem
          onClick={() => {
            navigate('/login');
            setOpen(false);
          }}
        >
          <ListItemIcon>
            <Login />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
export default ProfileSection;
