import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const INDEX = '/';

export function AppRouter() {
  return (
    <Routes>
      <Route path={INDEX} element={<div>index</div>} />
      <Route path="/test" element={<div>test</div>} />
      <Route path="/foo" element={<div>foo</div>} />
      <Route path="/bar" element={<div>bar</div>} />
    </Routes>
  );
}
