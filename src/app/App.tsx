import React from 'react';
import {
  Button, createTheme, CssBaseline, ThemeProvider,
} from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button>This Is Button</Button>
    </ThemeProvider>
  );
}

export default App;
