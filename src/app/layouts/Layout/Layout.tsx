import React from 'react';
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
      <div css={{
        width: '30%', height: '100%', display: 'flex', flexDirection: 'column',
      }}
      >
        {Object.keys(components).map((route) => <Link key={route} to={route}>{route}</Link>)}
      </div>
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
