import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} True React Test. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.youtube.com/@test" target="_blank" rel="noopener noreferrer" className="footer-link">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 15l5-3-5-3v6zm11.56-7.83c.1-.28.17-.74.19-1.1s-.02-.75-.25-1.02c-.22-.27-.58-.45-1.07-.48-.3-.02-1.3-.06-3.03-.06H8.5c-1.73 0-2.73.04-3.03.06-.49.03-.85.21-1.07.48-.23.27-.34.63-.25 1.02.02.36.09.82.19 1.1s.17.65.17.74-.07.46-.17.74c-.1.28-.17.74-.19 1.1s.02.75.25 1.02c.22.27.58.45 1.07.48.3.02 1.3.06 3.03.06h6.98c1.73 0 2.73-.04 3.03-.06.49-.03.85-.21 1.07-.48.23-.27.34-.63.25-1.02-.02-.36-.09-.82-.19-1.1s-.17-.65-.17-.74.07-.46.17-.74z" fill="var(--text-on-secondary)"/></svg>
            YouTube
          </a>
          <a href="mailto:test@test.com" className="footer-link">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="var(--text-on-secondary)"/></svg>
            test@test.com
          </a>
        </div>
        <p className="contact-info">
          For inquiries, please email us at <a href="mailto:test@test.com" className="footer-link">test@test.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;