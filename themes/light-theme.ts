import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: grey[300],
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {},
    },
  },
});
