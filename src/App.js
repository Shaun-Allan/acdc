import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Analysis from './pages/Analysis/Analysis';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> Ensure ScrollToTop is included to handle scrolling */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Analysis />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
