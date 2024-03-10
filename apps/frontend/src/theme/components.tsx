import { Theme } from '@mui/material';

const getComponentOverrides = (theme: Theme) => ({
  // Disables a mysterious transform that make skeletons shorter than they should be
  MuiSkeleton: {
    styleOverrides: {
      root: {
        transformOrigin: 'unset',
        transform: 'unset',
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        background: theme.palette.background.default,
        borderBottom: '1px solid #aaa',
      },
    },
  },
  // The MUI Card extra padding on the final child for some reason
  MuiCardContent: {
    styleOverrides: {
      root: {
        p: 1,
        '&:last-child': { pb: 0 },
      },
    },
  },
});
export default getComponentOverrides;
