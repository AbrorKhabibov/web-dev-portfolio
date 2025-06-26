import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface AnimatedBackgroundProps {
  variant?: 'geometric' | 'particles' | 'waves';
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'geometric' }) => {
  const { theme } = useTheme();

  if (variant === 'geometric') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <div 
          className="absolute w-48 h-48 rounded-full opacity-5 animate-pulse"
          style={{ 
            backgroundColor: theme.colors.accent.primary,
            top: '10%',
            right: '5%',
            animationDuration: '4s'
          }}
        />
        
        {/* Medium squares */}
        <div 
          className="absolute w-32 h-32 opacity-10 animate-bounce"
          style={{ 
            backgroundColor: theme.colors.accent.hover,
            top: '60%',
            left: '10%',
            transform: 'rotate(45deg)',
            animationDuration: '6s'
          }}
        />
        
        <div 
          className="absolute w-24 h-24 rounded-full opacity-8 animate-ping"
          style={{ 
            backgroundColor: theme.colors.accent.primary,
            bottom: '20%',
            right: '15%',
            animationDuration: '3s'
          }}
        />
        
        {/* Small floating elements */}
        <div 
          className="absolute w-16 h-16 opacity-6"
          style={{ 
            backgroundColor: theme.colors.accent.hover,
            top: '30%',
            left: '20%',
            transform: 'rotate(30deg)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute w-20 h-20 rounded-full opacity-4"
          style={{ 
            backgroundColor: theme.colors.accent.primary,
            top: '70%',
            right: '30%',
            animation: 'float 10s ease-in-out infinite reverse'
          }}
        />
      </div>
    );
  }

  if (variant === 'particles') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full opacity-20"
            style={{
              backgroundColor: i % 2 === 0 ? theme.colors.accent.primary : theme.colors.accent.hover,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

// Add these keyframes to your CSS
const animationStyles = `
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes particle-float {
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-30px) scale(1.2);
    opacity: 0.4;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyles;
  document.head.appendChild(style);
}