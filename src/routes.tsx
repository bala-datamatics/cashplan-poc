import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ElementAddNewContact } from './screens/ElementAddNewContact/ElementAddNewContact';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElementAddNewContact />} />
      </Routes>
    </Router>
  );
};
