import React from 'react';
// import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Footer from './Footer';

const Documentation = () => {
  return (
    <div className="documentation">
      <h1>📘 Project Documentation</h1>

      <section>
        <h2>🔍 Project Scope</h2>
        <p>
          This system is an <strong>agentic Retrieval-Augmented Generation (RAG)</strong> platform that helps answer complex questions 
          and derive meaningful relationships between key sustainability indicators—including land use, geospatial analytics, climate change, 
          and environmental impacts—specifically tailored for decision-makers in Africa.
        </p>
        <p>
          The tool supports core stakeholders in making informed decisions by mapping connections between ecological, economic, and social 
          sustainability outcomes.
        </p>
      </section>

      <section>
        <h2>🧠 System Behavior</h2>
        <p>The assistant operates under a defined prompt to:</p>
        <ul>
          <li>Answer questions based on context from African sustainability-related sources.</li>
          <li>Leverage global publicly available research documents through an indexed knowledge base.</li>
          <li>Perform web searches only when the internal context does not contain the required answer.</li>
          <li>Reject queries outside the African scope with a disclaimer.</li>
          <li>Attribute sources and metadata with each response (e.g., title, publication).</li>
        </ul>
      </section>

      <section>
        <h2>🛠️ Core Technologies</h2>
        <ul>
          <li><strong>Frontend:</strong> React (with Markdown rendering & chat interface)</li>
          <li><strong>Backend:</strong> FastAPI (Python) API with streaming & abort handling</li>
          <li><strong>RAG Engine:</strong> LLM with vector search on curated knowledge base</li>
          <li><strong>Data Source:</strong> Indexed, publicly available sustainability research documents</li>
        </ul>
      </section>

      <section>
        <h2>📎 Supported Domains</h2>
        <ul>
          <li>Climate Change Monitoring and Adaptation Planning</li>
          <li>Disaster Risk and Resilience Mapping</li>
          <li>Land Use and Ecosystem Services Economics</li>
          <li>Environmental Justice & Equity Mapping</li>
          <li>Urbanization, Agriculture, and Water Resource Planning</li>
        </ul>
      </section>

      <section>
        <h2>⚠️ Limitations</h2>
        <ul>
          <li>Does not answer questions outside African contexts.</li>
          <li>Web search may not always return optimal data if sources are limited or unindexed.</li>
          <li>Knowledge base is updated periodically; may not reflect real-time changes.</li>
        </ul>
      </section>

      <section>
        <h2>🧪 Example Prompt</h2>
        <pre className="code-block">
            What is the effect of wildfires in africa?
        </pre>
      </section>

      {/* <footer className="doc-footer">
        <footer className="footer" style={{ textAlign: 'center', padding: '7px 0 0 0', backgroundColor: '#f2f2f2' }}>
              <div className="footer__socials" style={{ fontSize: '24px' }}>
        
                <a
                  href="https://www.linkedin.com/in/isah-abdul-azeez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: '0 10px', color: '#0077B5' }} // LinkedIn Blue
                >
                  <FaLinkedin />
                </a>
        
                <a
                  href="https://github.com/isah-a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: '0 10px', color: '#171515' }} // GitHub Black
                >
                  <FaGithub />
                </a>
        
                <a
                  href="https://x.com/As_shanowi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: '0 10px', color: '#1DA1F2' }} // Twitter Blue
                >
                  <FaTwitter />
                </a>
              </div>
        
              <p className="footer__text" style={{ fontSize: '14px', color: '#555' }}>
                Created by:<strong> Isah Abdul-Azeez</strong><br />
                August, 2025.
              </p>
            </footer>
      </footer> */}
      <footer className="doc-footer">
        <Footer />
    </footer>
    </div>
  );
};

export default Documentation;
