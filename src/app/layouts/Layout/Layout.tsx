import React from 'react';
import { Button, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import * as components from '../../components';

function Layout() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={{
        maxWidth: '1024px',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        flexDirection="column"
        width="30%"
        height="100%"
        padding={2}
        spacing={1}
      >
        {Object.keys(components).map((route) => <Button component={Link} key={route} to={route}>{route}</Button>)}
      </Stack>
      <div css={{
        width: '70%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
