import React from 'react';
import './Header.css';

function Header() {
  // Mock User Data
  const userName = "Algorithm Apprentice"; 
  const userLevel = 7; 

  return (
    <header className="app-header">
      <div className="logo">
        <span className="logo-text">SORTIT</span>
      </div>
      <div className="user-info">
        <span className="user-name">{userName}</span>
        <div className="user-avatar-container">
          {/* Placeholder for an image or initial icon */}
          <span className="user-avatar">AA</span>
          <span className="user-level">Lvl {userLevel}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;