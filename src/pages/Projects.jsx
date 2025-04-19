import React from 'react';
import { useProjectContext } from '../context/ProjectContext.jsx';

function TimeTracker() {
  const { projects, activeTimer, startTimer, stopTimer } = useProjectContext();

  return (
    <div className="time-tracker">
      <h1>Time Tracker</h1>
      
      <div className="timer-section">
        <h2>Track Time</h2>
        {!activeTimer ? (
          <div className="select-project">
            <p>Select a project to track time for:</p>
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  <button onClick={() => startTimer(project.id)}>
                    {project.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="active-timer">
            <p>Timer active for: {projects.find(p => p.id === activeTimer.projectId)?.name}</p>
            <p>Started at: {activeTimer.startTime.toLocaleTimeString()}</p>
            <button onClick={stopTimer}>Stop Timer</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeTracker;