import React from 'react';
import DashboardLayout from './components/DashboardLayout';


function App() {
  return (
    <div className="App">
      {/* In a final project, this might include routing logic to show 
        the Dashboard only on the '/Dashboard' route. 
        For now, we render the DashboardLayout directly. 
      */}
      <DashboardLayout />
    </div>
  );
}

export default App;
