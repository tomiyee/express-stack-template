import {
  CssBaseline,
  Theme,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { PropsWithChildren } from 'react';
import themePalette from './palette';
import getComponentOverrides from './components';
import getTypographyOptions from './typography';

const ThemeCustomization: React.FC<PropsWithChildren> = ({ children }) => {
  const themeOptions = getThemeOptions(themePalette);
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default ThemeCustomization;

const getThemeOptions = (theme: Theme): ThemeOptions => ({
  palette: theme.palette,
  typography: getTypographyOptions(theme),
  components: getComponentOverrides(theme),
});
