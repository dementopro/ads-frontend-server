import { createContext, useContext, useEffect, useState } from 'react';

import axios from '@/lib/axios';

interface ProjectContext {
  projectData: any[];
  setProjectData: (data: any[]) => void;
}

export const ProjectContext = createContext<ProjectContext>({
  projectData: [],
  setProjectData: (data: any[]) => {},
});

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectData, setProjectData] = useState<any[]>([]);

  useEffect(() => {
    const projects = window.localStorage.getItem('projects');

    if (projects) {
      const parsedProjects = JSON.parse(projects);
      setProjectData(parsedProjects);
    }
  }, []);

  useEffect(() => {
    if (projectData && Object.keys(projectData).length > 0) {
      window.localStorage.setItem('projects', JSON.stringify(projectData));
    }
  }, [projectData]);

  // Provide the account data through the context to child components
  return (
    <ProjectContext.Provider
      value={{
        projectData,
        setProjectData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
