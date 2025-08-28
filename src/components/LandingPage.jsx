import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Adjust path accordingly

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-canvas-container">
    <div style={{ textAlign: 'center', paddingTop: '80px' }}>
      <h1>EarthQuery</h1>
      <p>
        Ask precisely, responds concisely<br />
        to queries on sustainable earth observation and human angle.
      </p>
      <button onClick={() => navigate('/demo')}>Go to Chat</button>

      {/* Footer at bottom */}
      <div style={{ marginTop: '100px', marginBottom:'0', padding: '0 20px', borderRadius: '30px'}}>
        <Footer />
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
