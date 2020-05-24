import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontSize: 13,
    fontFamily: 'Helvetica',
  },
  palette: {
    primary: {
      main: '#14AAE1',
    },
    secondary: {
      main: '#11cdef',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EFF0F1',
    },
  },
});

export default theme;
