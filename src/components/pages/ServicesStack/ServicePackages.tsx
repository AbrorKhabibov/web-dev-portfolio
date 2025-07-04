import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { servicePackages } from './servicesData';

export const ServicePackages: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.colors.primary.text }}>
            Service Packages
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.colors.neutral.text }}>
            Choose from our pre-designed packages or let's create a custom solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-2xl shadow-lg relative ${pkg.popular ? 'ring-2 transform scale-105' : ''}`}
              style={{ 
                backgroundColor: theme.colors.secondary.bg,
                '--tw-ring-color': pkg.popular ? theme.colors.accent.primary : 'transparent'
              } as React.CSSProperties}
            >
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: theme.colors.accent.primary,
                    color: theme.colors.button.primary.text
                  }}
                >
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.secondary.text }}>
                  {pkg.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: theme.colors.neutral.text }}>
                  {pkg.description}
                </p>
                <div className="text-3xl font-bold" style={{ color: theme.colors.accent.primary }}>
                  {pkg.price}
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: theme.colors.accent.primary }}
                    ></div>
                    <span className="text-sm" style={{ color: theme.colors.secondary.text }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.popular ? 'transform hover:scale-105' : ''
                }`}
                style={{
                  backgroundColor: pkg.popular ? theme.colors.accent.primary : 'transparent',
                  color: pkg.popular ? theme.colors.button.primary.text : theme.colors.accent.primary,
                  border: `2px solid ${theme.colors.accent.primary}`
                }}
              >
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
