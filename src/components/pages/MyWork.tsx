import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../reusables/AnimatedBackground';
import { Footer } from '../reusables/Footer';
import WaveSeparator from '../reusables/WaveSeparator';
import { MyWorkHeader } from './MyWorkStack/MyWorkHeader';
import { ProjectsSection } from './MyWorkStack/ProjectsSection';
import { TestimonialsSection } from './MyWorkStack/TestimonialsSection';
import { ProjectModal } from './MyWorkStack/ProjectModal';
import type { Project } from './MyWorkStack/projectsData';

export const MyWork: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: theme.colors.primary.bg }}>
        <AnimatedBackground variant="waves" />
        <MyWorkHeader />
        <ProjectsSection onProjectClick={setSelectedProject} />
        <TestimonialsSection />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
      <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
      <Footer />
    </>
  );
};