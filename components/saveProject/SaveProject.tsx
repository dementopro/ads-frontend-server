import { useProjectContext } from '@/context/project';
import * as React from 'react';
import { useEffect } from 'react';

interface SaveProjectProps {
  saveProject: () => void;
}

const SaveProject: React.FC<SaveProjectProps> = ({ saveProject }) => {
  return (
    <div className="flex items-center justify-end w-full mt-4">
      <button
        onClick={saveProject}
        className="flex items-center justify-center w-28 h-10 bg-[#23252B] border border-[rgba(160, 155, 174, 0.20)] rounded-lg"
      >
        Save Project
      </button>
    </div>
  );
};

export default SaveProject;
