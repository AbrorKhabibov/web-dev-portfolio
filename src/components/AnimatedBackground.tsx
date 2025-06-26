import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface AnimatedBackgroundProps {
  variant?: 'geometric' | 'particles' | 'waves' | 'grid';
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
          className="absolute w-32 h-32 opacity-25 animate-bounce"
          style={{ 
            backgroundColor: theme.colors.accent.hover,
            top: '60%',
            left: '10%',
            transform: 'rotate(45deg)',
            animationDuration: '6s'
          }}
        />
        
        <div 
          className="absolute w-24 h-24 rounded-full opacity-15 animate-ping"
          style={{ 
            backgroundColor: theme.colors.accent.primary,
            bottom: '20%',
            right: '15%',
            animationDuration: '3s'
          }}
        />
        
        {/* Small floating elements */}
        <div 
          className="absolute w-16 h-16 opacity-12"
          style={{ 
            backgroundColor: theme.colors.accent.hover,
            top: '30%',
            left: '20%',
            transform: 'rotate(30deg)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute w-20 h-20 rounded-full opacity-12"
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

  if (variant === 'waves') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated waves */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${theme.colors.accent.primary}10 50%, transparent 70%)`,
            animation: 'wave-move 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(-45deg, transparent 40%, ${theme.colors.accent.hover}08 60%, transparent 80%)`,
            animation: 'wave-move 12s ease-in-out infinite reverse'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 50%, ${theme.colors.accent.primary}15 20%, transparent 50%)`,
            animation: 'wave-pulse 10s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 80% 30%, ${theme.colors.accent.hover}12 15%, transparent 40%)`,
            animation: 'wave-pulse 14s ease-in-out infinite reverse'
          }}
        />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme.colors.accent.primary}40 1px, transparent 4px),
              linear-gradient(90deg, ${theme.colors.accent.primary}40 1px, transparent 4px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
        
        {/* Moving grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme.colors.accent.hover}30 1px, transparent 1px),
              linear-gradient(90deg, ${theme.colors.accent.hover}30 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move-reverse 15s linear infinite'
          }}
        />
        
        {/* Floating dots on grid intersections */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: theme.colors.accent.primary,
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animation: `dot-glow ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
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

@keyframes wave-move {
  0%, 100% {
    transform: translateX(-50px) translateY(-25px) rotate(0deg);
  }
  50% {
    transform: translateX(50px) translateY(25px) rotate(180deg);
  }
}

@keyframes wave-pulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.1;
  }
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(60px, 60px);
  }
}

@keyframes grid-move-reverse {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-40px, -40px);
  }
}

@keyframes dot-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.8;
  }
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationStyles;
  document.head.appendChild(style);
}