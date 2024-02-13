import { Theme } from '@mui/material';

/**
 * @param theme The color palette to inform font color
 * @returns MUI Typography
 */
const getTypographyOptions = (theme: Theme) => ({
  fontFamily: `'DM Sans', sans-serif`,
  h1: {
    fontSize: '2rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  h2: {
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.25rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  h4: {
    fontSize: '1rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  h5: {
    fontSize: '0.875rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  h6: {
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: '0.75rem',
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  subtitle2: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  caption: {
    fontSize: '0.75rem',
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  body1: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: '1.334em',
  },
  body2: {
    letterSpacing: '0em',
    fontWeight: 500,
    lineHeight: '1.5em',
    color: theme.palette.text.primary,
  },
});
export default getTypographyOptions;
