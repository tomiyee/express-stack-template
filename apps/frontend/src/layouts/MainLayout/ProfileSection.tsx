import { AccountCircle, Logout } from '@mui/icons-material';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { useRef, useState } from 'react';

const ProfileSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
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
        <MenuItem>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
export default ProfileSection;
