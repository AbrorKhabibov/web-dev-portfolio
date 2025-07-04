import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { projects } from './projectsData';

export const TestimonialsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
            Client Testimonials
          </h2>
          <p className="text-lg" style={{ color: theme.colors.neutral.text }}>
            What my clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => 
            project.testimonial && (
              <div
                key={project.id}
                className="p-8 rounded-2xl shadow-lg"
                style={{ backgroundColor: theme.colors.secondary.bg }}
              >
                <div className="mb-6">
                  <div className="text-4xl mb-4" style={{ color: theme.colors.accent.primary }}>
                    "
                  </div>
                  <p className="text-lg italic mb-6" style={{ color: theme.colors.secondary.text }}>
                    {project.testimonial.message}
                  </p>
                </div>
                <div className="border-t pt-6" style={{ borderColor: theme.colors.neutral.border }}>
                  <div className="font-semibold" style={{ color: theme.colors.secondary.text }}>
                    {project.testimonial.author}
                  </div>
                  <div style={{ color: theme.colors.neutral.text }}>
                    {project.testimonial.position}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
