import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'; // Import your CSS file
import Home from './home';
import Resume from './resume';
import Day from './day';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/home" element={<Home />} />
        <Route path="/day" element={<Day />} />
        <Route path="/day/:day" element={<Day />} />
      </Routes>
    </Router>
  );
}
export default App;
