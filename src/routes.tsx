import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ElementCreateNew } from './screens/ElementCreateNew/ElementCreateNew';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementCreateNew />} />
      </Routes>
    </Router>
  );
};
