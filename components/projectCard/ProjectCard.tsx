import * as React from 'react';

interface ProjectCardProps {
  project: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-[#35363A] rounded-lg p-4">
      <div className="flex items-center justify-center bg-[#1B1C21] p-8 rounded-lg">
        <h2 className="text-lg font-semibold">{project.project_name}</h2>
      </div>
      <span className="text-sm font-semibold">
        {project.content_type.toUpperCase()}
      </span>
      <span className="text-sm">
        Created{' '}
        {new Date(project.created_at).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })}
      </span>
    </div>
  );
};

export default ProjectCard;
