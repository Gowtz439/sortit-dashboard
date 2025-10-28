import React from 'react';
import './ReflectionLog.css';

const highIterationEvents = [
  { id: 1, alg: 'QuickSort Partition', iterations: 9, summary: 'Misunderstood pivot selection in worst-case.' },
  { id: 2, alg: 'MergeSort Stability', iterations: 7, summary: 'Confused in-place with auxiliary space.' },
  { id: 3, alg: 'BubbleSort Runtime', iterations: 8, summary: 'Forgot best-case complexity logic.' },
  { id: 4, alg: 'HeapSort Logic', iterations: 6, summary: 'Error in max-heapify logic during deletion.' },
  // ... more items can be added but the container will hide scroll or flex ...
];

function ReflectionLog() {
  return (
    <div className="bento-box reflection-log"> 
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