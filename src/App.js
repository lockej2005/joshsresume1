import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file
import Resume from './resume';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
