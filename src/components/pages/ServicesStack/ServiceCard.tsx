import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import type { Service } from './servicesData';

interface ServiceCardProps {
  service: Service;
  onServiceClick: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onServiceClick }) => {
  const { theme } = useTheme();

  return (
    <div 
      className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      style={{ backgroundColor: theme.colors.secondary.bg }}
      onClick={() => onServiceClick(service)}
    >
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: theme.colors.secondary.text }}>
          {service.title}
        </h3>
        <p className="text-lg" style={{ color: theme.colors.neutral.textSecondary }}>
          {service.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium" style={{ color: theme.colors.neutral.text }}>
            Starting from
          </span>
          <span className="text-2xl font-bold" style={{ color: theme.colors.accent.primary }}>
            {service.pricing.startingPrice}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium" style={{ color: theme.colors.neutral.text }}>
            Delivery Time
          </span>
          <span className="text-sm" style={{ color: theme.colors.secondary.text }}>
            {service.deliveryTime}
          </span>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t" style={{ borderColor: theme.colors.neutral.border }}>
        <div className="flex flex-wrap gap-2">
          {service.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: theme.colors.accent.primary + '20',
                color: theme.colors.accent.primary
              }}
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 3 && (
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: theme.colors.neutral.border,
                color: theme.colors.neutral.text
              }}
            >
              +{service.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button
          className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
          style={{
            backgroundColor: theme.colors.accent.primary,
            color: theme.colors.button.primary.text
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
