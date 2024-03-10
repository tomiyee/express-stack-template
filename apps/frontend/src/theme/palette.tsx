import { createTheme } from '@mui/material';

/**
 * We begin by defining the color palette for the theme. This
 * will allow us to reference the palette when defining the
 * other MUI theme properties.
 */
const themePalette = createTheme({
  palette: {
    text: {
      primary: '#3A414C',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});
export default themePalette;
