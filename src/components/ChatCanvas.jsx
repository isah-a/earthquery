import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer';

const ChatCanvas = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const [abortController, setAbortController] = useState(null);

  const handleStop = () => {
    if (abortController) abortController.abort();
  };

  const formatTimeDiff = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60).toString().padStart(2, '0');
    const minutes = Math.floor((ms / (1000 * 60)) % 60).toString().padStart(2, '0');
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const sentTime = new Date();
    const userMessage = { type: 'user', text: input, timestamp: sentTime };
    const controller = new AbortController();
    setAbortController(controller);
    const startTime = Date.now();

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('https://earthquery-agentic-rag.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
        signal: controller.signal,
      });

      const endTime = Date.now();
      const elapsed = endTime - startTime;

      if (!res.ok) throw new Error('Server error');

      const data = await res.json();
      const botMessage = {
        type: 'bot',
        text: data.response,
        timestamp: new Date(),
        responseTime: formatTimeDiff(elapsed)
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      const errorText = err.name === 'AbortError'
        ? '⛔ Request was cancelled.'
        : '❌ Failed to get response from backend.';

      setMessages(prev => [...prev, {
        type: 'bot',
        text: errorText,
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
      setAbortController(null);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="chat-canvas-container">
    <div className="chat-wrapper">
      <div className="input-area">
        <textarea
          ref={textareaRef}
          placeholder="Ask about weather, floods, or forecasts..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button onClick={isLoading ? handleStop : handleSend}>
          {isLoading ? (
            <>
              <span className="spinner" /> Stop
            </>
          ) : (
            'Send'
          )}
        </button>
      </div>

      {messages.length > 0 && (
        <div className="messages-window">
          {messages.map((msg, i) => (
            <div key={i} className={`message-bubble ${msg.type}`}>
              <div className="message-header">
                {msg.type === 'user' ? 'You' : 'Response'}
              </div>
              <ReactMarkdown>{msg.text}</ReactMarkdown>
              <div className="message-meta">
                Requested: {msg.timestamp.toLocaleString()}
                {msg.responseTime && (
                  <span> ⏱ {msg.responseTime}</span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
    {/* Footer */}
    <div style={{ marginTop: '100px', padding: '0 20px', backgroundColor: '#f2f2f2' }}>
      <Footer />
    </div>
  </div>
  );
};

export default ChatCanvas;
