// src/components/Puzzles/PuzzlesBlock.js
import React from 'react';
import './PuzzlesBlock.css';

function PuzzlesBlock() {
  return (
    <div className="bento-box puzzles-block"> {/* Applied bento-box class */}
      <h2 className="box-title">Puzzles & Challenges</h2>
      <div className="puzzle-item archeologist-puzzle">
        <span className="puzzle-title">Algorithm Archeologist</span>
        <p>Identify the sorting algorithm by its execution footprint.</p>
        <button className="bento-button puzzle-button start-archeologist">Start Excavation</button>
      </div>
      <div className="puzzle-item forge-puzzle">
        <span className="puzzle-title">The Algorithm Forge</span>
        <p>Design a custom sort to meet strict Time/Space constraints.</p>
        <button className="bento-button puzzle-button start-forge">Enter Forge</button>
      </div>
    </div>
  );
}

export default PuzzlesBlock;