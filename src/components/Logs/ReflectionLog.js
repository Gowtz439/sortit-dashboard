// src/components/Logs/ReflectionLog.js
import React from 'react';
import './ReflectionLog.css';

const highIterationEvents = [
  { id: 1, alg: 'Quick Sort', iterations: 9, summary: 'Misunderstood worst-case pivot selection.' },
  { id: 2, alg: 'Merge Sort', iterations: 7, summary: 'Confused in-place with auxiliary space.' },
  { id: 3, alg: 'Bubble Sort', iterations: 8, summary: 'Forgot stability rules for equal elements.' },
  { id: 4, alg: 'Heap Sort', iterations: 6, summary: 'Error in max-heapify logic during deletion.' },
  // ... add more items as needed ...
];

function ReflectionLog() {
  return (
    <div className="bento-box reflection-log"> {/* Applied bento-box class */}
      <h2 className="box-title">Socratic Reflection Log <span className="log-count">({highIterationEvents.length} Pending)</span></h2>
      <div className="log-list">
        {highIterationEvents.map((log) => (
          <div key={log.id} className="log-item">
            <span className="log-alg">{log.alg}</span>
            <span className="log-details">{log.summary} (Needed <span className="iterations">{log.iterations} Iterations</span>)</span>
            <button className="bento-button reflect-button">Reflect</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReflectionLog;