import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
        maxWidth: '1024px', margin: '0 auto', display: 'flex', flexDirection: 'row',
      }}
    >
      <div css={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
        {['/', '/test', '/foo', '/bar'].map((route) => <Link key={route} to={route}>{route}</Link>)}
      </div>
      <div css={{ width: '70%' }}>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
