import React from 'react';
import './ConceptEfficiency.css';

const algorithms = [
  { name: 'Bubble Sort', ces: 92, status: 'high' },
  { name: 'Insertion Sort', ces: 78, status: 'medium' },
  { name: 'Selection Sort', ces: 61, status: 'low' },
  { name: 'Merge Sort', ces: 85, status: 'high' },
  { name: 'Quick Sort', ces: 55, status: 'critical' },
  { name: 'Heap Sort', ces: 88, status: 'high' },
  { name: 'Radix Sort', ces: 95, status: 'high' },
  { name: 'Counting Sort', ces: 70, status: 'medium' },
];

function ConceptEfficiency() {
  return (
    <div className="bento-box efficiency-heatmap"> 
      <h2 className="box-title">Concept Efficiency Heatmap</h2>
      <div className="heatmap-grid">
        {algorithms.map((alg) => (
          <div key={alg.name} className={`heatmap-cell status-${alg.status}`}>
            <span className="alg-name">{alg.name}</span>
            <span className="alg-score">{alg.ces}%</span>
          </div>
        ))}
      </div>
      <div className="legend">
        <span className="status-high">High Efficiency</span>
        <span className="status-low">Low Efficiency</span>
        <span className="status-critical">Critical Review</span>
      </div>
    </div>
  );
}

export default ConceptEfficiency;