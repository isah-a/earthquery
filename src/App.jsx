import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatCanvas from './components/ChatCanvas';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/demo" element={<ChatCanvas />} />
            {/* <Route path="/docs" element={<Documentation />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
