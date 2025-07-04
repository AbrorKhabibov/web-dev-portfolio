import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';

export const ContactMethods: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: theme.colors.primary.text }}>
            Other Ways to Connect
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: theme.colors.accent.primary + '20' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                Quick Response
              </h3>
              <p style={{ color: theme.colors.neutral.text }}>
                I respond to all messages within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: theme.colors.accent.primary + '20' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                Free Consultation
              </h3>
              <p style={{ color: theme.colors.neutral.text }}>
                15-minute call to discuss your project needs
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: theme.colors.accent.primary + '20' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={theme.colors.accent.primary}>
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.secondary.text }}>
                Flexible Schedule
              </h3>
              <p style={{ color: theme.colors.neutral.text }}>
                Available for meetings across different time zones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
