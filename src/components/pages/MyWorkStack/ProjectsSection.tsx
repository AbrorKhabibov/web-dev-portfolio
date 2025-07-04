import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';
import type { Project } from './projectsData';

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              onProjectClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
