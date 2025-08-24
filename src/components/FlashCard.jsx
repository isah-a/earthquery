import React from 'react';

const Flashcard = ({ question, answer, onDelete }) => (
  <div style={{
    background: '#1e1e2f',
    padding: '15px',
    margin: '10px',
    borderRadius: '10px',
    width: '300px'
  }}>
    <h4>{question}</h4>
    <p>{answer}</p>
    <button onClick={onDelete}>Remove</button>
  </div>
);

export default Flashcard;
