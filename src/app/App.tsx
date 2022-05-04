import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouter } from './routes';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
