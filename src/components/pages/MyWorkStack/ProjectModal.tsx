import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import type { Project } from './projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { theme } = useTheme();

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full rounded-2xl p-8 max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: theme.colors.secondary.bg }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: theme.colors.secondary.text }}>
              {project.title}
            </h3>
            <p style={{ color: theme.colors.neutral.text }}>
              {project.category} project for {project.client}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-3xl p-2 rounded-full hover:bg-opacity-20 transition-colors"
            style={{ color: theme.colors.neutral.text }}
          >
            ×
          </button>
        </div>

        {/* Project Image in Modal */}
        <div className="mb-8">
          <img 
            src={project.image} 
            alt={`${project.title} website screenshot`}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
              Project Overview
            </h4>
            <p className="text-lg" style={{ color: theme.colors.neutral.textSecondary }}>
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
              Key Features
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: theme.colors.accent.primary }}
                  ></div>
                  <span style={{ color: theme.colors.secondary.text }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: theme.colors.accent.primary + '20',
                    color: theme.colors.accent.primary
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t" style={{ borderColor: theme.colors.neutral.border }}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: theme.colors.accent.primary,
                color: theme.colors.button.primary.text
              }}
            >
              Visit Live Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
