import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import type { Service } from './servicesData';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const { theme } = useTheme();

  if (!service) return null;

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
          <div className="flex items-center gap-4">
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: theme.colors.secondary.text }}>
                {service.title}
              </h3>
              <p style={{ color: theme.colors.neutral.text }}>
                {service.category} Service
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-3xl p-2 rounded-full hover:bg-opacity-20 transition-colors"
            style={{ color: theme.colors.neutral.text }}
          >
            ×
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
              Service Overview
            </h4>
            <p className="text-lg" style={{ color: theme.colors.neutral.textSecondary }}>
              {service.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
              What's Included
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
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
              {service.technologies.map((tech, index) => (
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

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
                Pricing
              </h4>
              <div className="space-y-2">
                <div className="text-3xl font-bold" style={{ color: theme.colors.accent.primary }}>
                  {service.pricing.startingPrice}
                </div>
                <p className="text-sm" style={{ color: theme.colors.neutral.text }}>
                  {service.pricing.priceNote}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4" style={{ color: theme.colors.secondary.text }}>
                Delivery Time
              </h4>
              <div className="text-xl font-semibold" style={{ color: theme.colors.secondary.text }}>
                {service.deliveryTime}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t flex flex-col sm:flex-row gap-4" style={{ borderColor: theme.colors.neutral.border }}>
            <button
              className="flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: theme.colors.accent.primary,
                color: theme.colors.button.primary.text
              }}
            >
              Get Started
            </button>
            <button
              className="flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 border-2"
              style={{
                borderColor: theme.colors.accent.primary,
                color: theme.colors.accent.primary,
                backgroundColor: 'transparent'
              }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
