// import React from 'react';
// import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__socials">

//         <a
//           href="https://www.linkedin.com/in/isah-abdul-azeez/"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#0077B5' }} // LinkedIn Blue
//         >
//           <FaLinkedin />
//         </a>

//         <a
//           href="https://github.com/isah-a/"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#171515' }} // GitHub Black
//         >
//           <FaGithub />
//         </a>

//         <a
//           href="https://x.com/As_shanowi"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#1DA1F2' }} // Twitter Blue
//         >
//           <FaTwitter />
//         </a>
//       </div>

//       <p className="footer__text">
//         Created by:<strong> Isah Abdul-Azeez</strong><br />
//         August, 2025.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.jsx

import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
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
  );
};

export default Footer;
