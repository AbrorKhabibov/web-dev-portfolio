import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { AnimatedBackground } from '../reusables/AnimatedBackground';
import { Footer } from '../reusables/Footer';
import WaveSeparator from '../reusables/WaveSeparator';
import { ServicesHeader } from './ServicesStack/ServicesHeader';
import { ServicesGrid } from './ServicesStack/ServicesGrid';
import { ServicePackages } from './ServicesStack/ServicePackages';
import { ServiceModal } from './ServicesStack/ServiceModal';
import type { Service } from './ServicesStack/servicesData';

export const Services: React.FC = () => {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: theme.colors.primary.bg }}>
        <AnimatedBackground variant="geometric" />
        <ServicesHeader />
        <ServicesGrid onServiceClick={setSelectedService} />
        <WaveSeparator topColor="var(--color-primary-bg)" botColor="var(--color-secondary-bg)" />
        <div style={{ backgroundColor: theme.colors.secondary.bg }}>
          <ServicePackages />
        </div>
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      </div>
      <WaveSeparator topColor="var(--color-secondary-bg)" botColor="var(--color-secondary-bg)" />
      <Footer />
    </>
  );
};
