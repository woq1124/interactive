import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import * as components from '../components';

const INDEX = '/';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={INDEX} element={<div>index</div>} />
          {Object.entries(components).map(([key, Component]) => <Route path={key} element={<Component />} />)}
        </Route>
      </Routes>
    </Router>
  );
}
