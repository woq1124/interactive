import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';

const INDEX = '/';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path={INDEX} element={<div>index</div>} />
          <Route path="/test" element={<div>test</div>} />
          <Route path="/foo" element={<div>foo</div>} />
          <Route path="/bar" element={<div>bar</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
