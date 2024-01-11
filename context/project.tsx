import { createContext, useContext, useEffect, useState } from 'react';

import axios from '@/lib/axios';

interface ProjectContext {
  projectData: any[];
  setProjectData: (data: any[]) => void;
  fetchProjects: (email: string) => void;
}

export const ProjectContext = createContext<ProjectContext>({
  projectData: [],
  setProjectData: (data: any[]) => {},
  fetchProjects: (email: string) => {},
});

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectData, setProjectData] = useState<any[]>([]);

  // useEffect(() => {
  //   const projects = window.localStorage.getItem('projects');

  //   if (projects) {
  //     const parsedProjects = JSON.parse(projects);
  //     setProjectData(parsedProjects);
  //   }
  // }, []);

  useEffect(() => {
    if (projectData && projectData.length > 0) {
      // window.localStorage.setItem('projects', JSON.stringify(projectData));
      if (projectData.length === 1) {
        saveProject(projectData[0]);
      } else {
        saveProject(projectData[projectData.length - 1]);
      }
    }
  }, [projectData]);

  const saveProject = async (project: any) => {
    try {
      const body = new FormData();
      body.append('email', project.email);
      body.append('project_name', project.project_name);
      body.append('content_type', project.content_type);
      body.append('data', JSON.stringify(project.data));

      const response = await axios.post('/fapi/save_project', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response?.data) {
        return response.data;
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const fetchProjects = async (email: string) => {
    try {
      const body = new FormData();
      body.append('email', email);

      const response = await axios.post('/fapi/projects', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response?.data) {
        console.log(response.data);

        if (response.data.projects.length > 0) {
          const projects = response.data.projects.map((project: any) => ({
            ...project,
            data: JSON.parse(project.data),
          }));

          setProjectData(projects);
        }
      }
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  // Provide the account data through the context to child components
  return (
    <ProjectContext.Provider
      value={{
        projectData,
        setProjectData,
        fetchProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
