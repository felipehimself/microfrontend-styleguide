import { orange, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const MicrofrontendTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});
