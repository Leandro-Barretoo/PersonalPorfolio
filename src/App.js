import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

const Header = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Homepage />} />
    </Routes>
  </Router>
);

export default Header;
