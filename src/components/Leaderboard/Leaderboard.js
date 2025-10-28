import React from 'react';
import './Leaderboard.css';

const leaderboardData = [
  { rank: 1, name: 'Ava Miller', xp: 9850, isUser: false },
  { rank: 2, name: 'Ben Carter', xp: 8720, isUser: false },
  { rank: 3, name: 'You (Coder_001)', xp: 4500, isUser: true },
  { rank: 4, name: 'Daria Chen', xp: 3910, isUser: false },
  { rank: 5, name: 'Ethan Hunt', xp: 3500, isUser: false },
];

function Leaderboard() {
  return (
    <div className="dashboard-card leaderboard-card">
      <h2 className="card-title">Global Leaderboard</h2>
      <div className="leaderboard-list">
        {leaderboardData.map((user) => (
          <div key={user.rank} className={`leaderboard-item ${user.isUser ? 'is-user' : ''}`}>
            <span className="rank-number">{user.rank}</span>
            <span className="rank-name">{user.name}</span>
            <span className="rank-xp">{user.xp} XP</span>
          </div>
        ))}
      </div>
      <p className="leaderboard-footer">Ranks are based on total XP and Concept Efficiency Score (CES).</p>
    </div>
  );
}

export default Leaderboard;