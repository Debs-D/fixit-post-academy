import React from 'react';

const Header = () => {
  return (
    <header className="container">
      <div className="nav">
        <div className="brand">
          <div className="logo" aria-hidden="true">FPA</div>
          <div>
            <strong style={{fontSize: '16px'}}>FixIt Post Academy</strong>
            <div className="small" style={{marginTop: '4px'}}>Mastering Film Postproduction</div>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#modules">Modules</a></li>
            <li><a href="#instructors">Instructors</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <a className="ghost" href="#contact">Contact</a>
          <a className="btn" href="#enroll">Enroll</a>
        </div>
      </div>
    </header>
  );
};

export default Header;