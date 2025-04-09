import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ElementCreateNew } from './screens/ElementCreateNew';
import { ElementLoginScreen } from './screens/ElementLoginScreen';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementLoginScreen />} />
        <Route path="/create-new" element={<ElementCreateNew />} />
      </Routes>
    </Router>
  );
};
