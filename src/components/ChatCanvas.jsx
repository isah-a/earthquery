import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
// import './ChatCanvas.css'; // make sure to import the CSS file

const ChatCanvas = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { type: 'user', text: input };
    const startTime = Date.now();
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const endTime = Date.now();
      const elapsedSeconds = ((endTime - startTime) / 1000).toFixed(2);

      if (!res.ok) throw new Error('Server error');

      const data = await res.json();
      const botMessage = {
        type: 'bot',
        text: `${data.response}\n\n⏱ *Response time: ${elapsedSeconds}s*`
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: '❌ Failed to get response from backend.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-box">
          <h2 className="chat-title">What would you like to learn today?</h2>

          {messages.length > 0 && (
            <div className="messages-window">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.type}`}>
                  <strong>{msg.type === 'user' ? 'You:' : 'Bot:'}</strong>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}

          <div className="input-section">
            <textarea
              placeholder="Ask about weather, floods, or forecasts..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading}>
              {isLoading ? (
                <span className="spinner"></span>
              ) : (
                'Send'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCanvas;
