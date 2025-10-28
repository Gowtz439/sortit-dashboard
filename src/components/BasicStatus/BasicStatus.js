// src/components/BasicStatus/BasicStatus.js
import React from 'react';
import './BasicStatus.css';

function BasicStatus() {
  // Mock Data
  const studentId = "STUDENT-ID: 734";
  const userAvatar = "AG"; // For "Algo-Master"
  const currentLevel = 9;
  const levelName = "ALGO-MASTER";
  const progressToNextLevel = 75; // 75% to Level 10
  const currentXP = 18450;
  const optimalSolves = 285;

  const leaderboardSnippet = [
    { name: "BytSortBen", xp: "10K XP" },
    { name: "CodeFoxAva", xp: "9.5K XP" },
    { name: "You: AlgoLeo", xp: "8.4K XP", isUser: true },
  ];

  return (
    <div className="bento-box basic-status"> {/* Applied bento-box class */}
      {/* Left Section: User Profile */}
      <div className="user-profile-summary">
        <div className="avatar-wrapper">
          <span className="user-avatar">{userAvatar}</span>
        </div>
        <div className="user-details">
          <span className="student-id">{studentId}</span>
          <span className="level-name">LEVEL {currentLevel}: {levelName}</span>
          <div className="level-progress-bar-container">
            <div className="level-progress-bar-fill" style={{ width: `${progressToNextLevel}%` }}></div>
          </div>
          <span className="progress-text">{progressToNextLevel}% to Level {currentLevel + 1}</span>
        </div>
      </div>

      {/* Middle Section: XP and Optimal Solves */}
      <div className="xp-solves-summary">
        <div className="xp-display">
          <span className="xp-amount">{currentXP.toLocaleString()}</span>
          <span className="xp-label">XP</span>
        </div>
        <div className="optimal-solves-display">
          <span className="solves-amount">{optimalSolves}</span>
          <span className="solves-label">Optimal Solves</span>
        </div>
      </div>

      {/* Right Section: Global Leaderboard Snippet */}
      <div className="global-leaderboard-snippet">
        <span className="leaderboard-title">GLOBAL LEADERBOARD</span>
        {leaderboardSnippet.map((item, index) => (
          <p key={index} className={`leaderboard-item-snippet ${item.isUser ? 'you' : ''}`}>
            {index + 1}. {item.name} ({item.xp})
          </p>
        ))}
      </div>
    </div>
  );
}

export default BasicStatus;