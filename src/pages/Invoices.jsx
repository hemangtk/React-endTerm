import React from 'react';
import { useProjectContext } from '../context/ProjectContext.jsx';

function Projects() {
  const { projects, clients } = useProjectContext();

  return (
    <div className="projects">
      <h1>Projects & Clients</h1>
      <div className="project-list">
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p>No projects yet. Create your first project.</p>
        ) : (
          <ul>
            {projects.map(project => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="client-list">
        <h2>Clients</h2>
        {clients.length === 0 ? (
          <p>No clients yet. Add your first client.</p>
        ) : (
          <ul>
            {clients.map(client => (
              <li key={client.id}>{client.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Projects;