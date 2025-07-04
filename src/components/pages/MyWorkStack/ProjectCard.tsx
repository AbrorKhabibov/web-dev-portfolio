import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import type { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
  index: number;
  onProjectClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onProjectClick }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
      {/* Project Image/Preview */}
      <div className="flex-1">
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform hover:scale-105 transition-all duration-500"
          onClick={() => onProjectClick(project)}
        >
          {/* Website Preview Frame */}
          <div className="bg-gray-800 p-4 rounded-t-2xl">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div 
              className="text-sm px-4 py-2 rounded"
              style={{ backgroundColor: theme.colors.secondary.bg, color: theme.colors.neutral.text }}
            >
              {project.url}
            </div>
          </div>
          
          {/* Preview Content with Real Image */}
          <div 
            className="h-80 relative overflow-hidden"
            style={{ backgroundColor: theme.colors.secondary.bg }}
          >
            <img 
              src={project.image} 
              alt={`${project.title} website screenshot`}
              className="w-full h-full object-cover"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#101411c1] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-lg font-semibold mb-2">View Project Details</div>
                <div className="text-sm">Click to learn more</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex-1 space-y-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span 
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: theme.colors.accent.primary + '20',
                color: theme.colors.accent.primary 
              }}
            >
              {project.category}
            </span>
            <span style={{ color: theme.colors.neutral.text }}>
              for {project.client}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
            {project.title}
          </h2>
          
          <p className="text-lg mb-6" style={{ color: theme.colors.neutral.textSecondary }}>
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-lg font-semibold mb-3" style={{ color: theme.colors.secondary.text }}>
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: theme.colors.secondary.bg,
                  color: theme.colors.secondary.text,
                  border: `1px solid ${theme.colors.neutral.border}`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: theme.colors.accent.primary,
              color: theme.colors.button.primary.text
            }}
          >
            Visit Website
          </a>
          <button
            onClick={() => onProjectClick(project)}
            className="px-8 py-3 rounded-lg font-semibold text-center transition-all duration-300 border-2 hover:transform hover:scale-105"
            style={{
              borderColor: theme.colors.accent.primary,
              color: theme.colors.accent.primary,
              backgroundColor: 'transparent'
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
