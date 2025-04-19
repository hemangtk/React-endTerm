import React from 'react';
import { useProjectContext } from '../context/ProjectContext.jsx';

function Dashboard() {
  const { projects, timeEntries } = useProjectContext();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="summary">
        <div className="card">
          <h3>Active Projects</h3>
          <p>{projects.filter(p => p.status === 'active').length} projects</p>
        </div>
        <div className="card">
          <h3>Total Hours This Month</h3>
          <p>
            {(timeEntries.reduce((total, entry) => total + entry.duration, 0) / 60).toFixed(1)} hours
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;