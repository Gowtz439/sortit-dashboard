import React from 'react';
import './DashboardLayout.css';
import BasicStatus from './BasicStatus/BasicStatus';
import ConceptEfficiency from './Mastery/ConceptEfficiency';
import PuzzlesBlock from './Puzzles/PuzzlesBlock';
import ReflectionLog from './Logs/ReflectionLog';
import Leaderboard from './Leaderboard/Leaderboard'; // <-- RE-INTRODUCED

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {/* Top-level status bar as a wide Bento box */}
        <BasicStatus /> 

        {/* Heatmap (takes the top-left wide space) */}
        <ConceptEfficiency />
        
        {/* Leaderboard (goes below the heatmap/middle column) */}
        <Leaderboard />

        {/* Reflection Log (takes the space next to the heatmap) */}
        <ReflectionLog />

        {/* Puzzles block (often tall and narrow on the right) */}
        <PuzzlesBlock />
        
      </div>
    </div>
  );
}

export default DashboardLayout;