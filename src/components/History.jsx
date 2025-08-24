import React, { useState, useEffect } from 'react';
import Flashcard from './FlashCard';

const History = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('chatHistory')) || [];
    setCards(saved);
  }, []);

  const removeCard = (id) => {
    const updated = cards.filter(card => card.id !== id);
    setCards(updated);
    localStorage.setItem('chatHistory', JSON.stringify(updated));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
      {cards.map(card => (
        <Flashcard
          key={card.id}
          question={card.question}
          answer={card.answer}
          onDelete={() => removeCard(card.id)}
        />
      ))}
    </div>
  );
};

export default History;
