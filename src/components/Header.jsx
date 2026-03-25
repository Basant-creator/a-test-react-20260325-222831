import React from 'react';

function Header() {
  return (
    <header className="header" id="home">
      <div className="container header-content">
        <a href="#home" className="logo">True React Test</a>
        <nav className="nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;