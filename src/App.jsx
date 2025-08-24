import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatCanvas from './components/ChatCanvas';
import History from './components/History';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<ChatCanvas />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
