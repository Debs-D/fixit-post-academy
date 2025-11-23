import React from 'react';

const Footer = () => {
  return (
    <footer style={{marginTop: '36px'}}>
      <div className="container footer-grid">
        <div>
          <strong>FixIt Post Academy</strong>
          <div className="small" style={{marginTop: '6px'}}>© {new Date().getFullYear()} FixIt Post Academy. All rights reserved.</div>
        </div>
        <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
          <a className="small" href="#privacy">Privacy</a>
          <a className="small" href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;