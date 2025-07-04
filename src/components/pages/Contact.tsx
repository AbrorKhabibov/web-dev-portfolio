import React, { useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../reusables/AnimatedBackground';
import { Footer } from '../reusables/Footer';
import WaveSeparator from '../reusables/WaveSeparator';
import { ContactHeader } from './ContactStack/ContactHeader';
import { ContactContent } from './ContactStack/ContactContent';
import { ContactMethods } from './ContactStack/ContactMethods';

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  // Memoize the AnimatedBackground to prevent re-renders
  const memoizedBackground = useMemo(() => (
    <AnimatedBackground variant="particles" />
  ), []);

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: theme.colors.primary.bg }}>
        {memoizedBackground}
        <ContactHeader />
        <ContactContent />
        <ContactMethods />
      </div>
      <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
      <Footer />
    </>
  );
};