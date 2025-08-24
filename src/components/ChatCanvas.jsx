import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaHistory } from 'react-icons/fa';

const ChatCanvas = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedPair, setSelectedPair] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [
        ...prev,
        { type: 'user', text: input },
        { type: 'bot', text: 'Fetching response from backend...' },
      ]);
      setInput('');
    }
  };

  const handleSelectPair = (index) => {
    const question = messages[index];
    const answer = messages[index + 1];
    if (question?.type === 'user' && answer?.type === 'bot') {
      setSelectedPair({ question: question.text, answer: answer.text });
      alert('Q&A pair selected. Click the history button to save.');
    }
  };

  const addToHistory = () => {
    if (!selectedPair) {
      alert('Please select a Q&A pair first.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('chatHistory')) || [];
    const newItem = { id: Date.now(), ...selectedPair };
    localStorage.setItem('chatHistory', JSON.stringify([...existing, newItem]));
    alert('Chat pair added to history!');
    setSelectedPair(null);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className="chat-page"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* <nav className="nav-bar" style={{ padding: '20px', display: 'flex', gap: '20px', justifyContent: 'flex-end', color: 'white' }}>
        <a href="/" style={{ color: 'white' }}>Home</a>
        <a href="/demo" style={{ color: 'white' }}>Demo</a>
        <a href="/history" style={{ color: 'white' }}>History</a>
      </nav> */}

      <div className="chat-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <div className="chat-box" style={{ background: 'white', borderRadius: '15px', padding: '20px', width: '100%', maxWidth: '600px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <h2 className="chat-title">EarthQuery</h2>

          <div className="messages-window" style={{ flex: 1, overflowY: 'auto', padding: '10px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '20px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.type}`} style={{ marginBottom: '15px' }}>
                <strong>{msg.type === 'user' ? 'You:' : 'Bot:'}</strong>
                <ReactMarkdown>{msg.text}</ReactMarkdown>

                {msg.type === 'user' && messages[i + 1]?.type === 'bot' && (
                  <button
                    onClick={() => handleSelectPair(i)}
                    style={{ fontSize: '12px', marginTop: '5px' }}
                  >
                    Select this Q&A
                  </button>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="input-section" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <textarea
              placeholder="Ask about weather, floods, or forecasts..."
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ height: '60px', padding: '10px', borderRadius: '10px', fontSize: '16px', resize: 'none' }}
            />
            <button onClick={handleSend} style={{ alignSelf: 'flex-end', padding: '10px 20px', backgroundColor: '#6c00ff', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
              Send
            </button>
          </div>

          <button className="history-button" onClick={addToHistory} title="Add chat to history" style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#6c00ff' }}>
            <FaHistory />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatCanvas;
