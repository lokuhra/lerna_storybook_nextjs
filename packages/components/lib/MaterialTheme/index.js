import CssBaseline from '@material-ui/core/CssBaseline';
import Helmet from '../Helmet';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function MaterialTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Helmet />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
export default MaterialTheme;
