import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from './servicesData';
import type { Service } from './servicesData';

interface ServicesGridProps {
  onServiceClick: (service: Service) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onServiceClick }) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onServiceClick={onServiceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
