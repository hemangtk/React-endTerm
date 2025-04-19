import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [timeEntries, setTimeEntries] = useState([]);
  const [activeTimer, setActiveTimer] = useState(null);

  // Add a project
  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now().toString() }]);
  };

  // Add a client
  const addClient = (client) => {
    setClients([...clients, { ...client, id: Date.now().toString() }]);
  };

  // Start timer
  const startTimer = (projectId) => {
    setActiveTimer({
      projectId,
      startTime: new Date(),
      isRunning: true
    });
  };

  // Stop timer
  const stopTimer = () => {
    if (activeTimer) {
      const newTimeEntry = {
        id: Date.now().toString(),
        projectId: activeTimer.projectId,
        startTime: activeTimer.startTime,
        endTime: new Date(),
        duration: (new Date() - activeTimer.startTime) / 1000 / 60, // duration in minutes
      };
      setTimeEntries([...timeEntries, newTimeEntry]);
      setActiveTimer(null);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        clients,
        timeEntries,
        activeTimer,
        addProject,
        addClient,
        startTimer,
        stopTimer,
        setProjects,
        setClients,
        setTimeEntries
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};