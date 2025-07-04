import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

export const ServicesHeader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="pt-60 pb-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: theme.colors.primary.text }}>
            Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: theme.colors.neutral.textSecondary }}>
            From concept to launch, I provide comprehensive web development services to help your business succeed online.
          </p>
        </div>
      </div>
    </section>
  );
};
