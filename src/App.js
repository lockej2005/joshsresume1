import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file
import Home from './home';
import Resume from './resume';
import Day from './day';
import Admin from './admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<Resume />} />
        <Route path="/day" element={<Day />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
