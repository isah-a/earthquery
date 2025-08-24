import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>EarthQuery</h1>
      <p>Ask precisely, responds concisely<br />to queries on sustainable earth observation and human angle.</p>
      <button onClick={() => navigate('/demo')}>Go to Chat</button>
    </div>
  );
};

export default LandingPage;
