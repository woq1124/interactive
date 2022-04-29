import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouter } from './routes';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div css={{ display: 'flex', flexDirection: 'row' }}>
          <div css={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
            {['/', '/test', '/foo', '/bar'].map((route) => <Link key={route} to={route}>{route}</Link>)}
          </div>
          <div css={{ width: '70%' }}>
            <AppRouter />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
