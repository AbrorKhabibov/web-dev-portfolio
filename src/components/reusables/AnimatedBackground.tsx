import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface AnimatedBackgroundProps {
  variant?: 'geometric' | 'particles' | 'waves' | 'grid';
}

/*
 * Each variant is a single <div> with layered CSS gradients.
 * One slow opacity animation max per variant — everything runs on the
 * compositor so it never blocks the main thread or hurts INP.
 */

const BASE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  contain: 'strict',
};

const AnimatedBackgroundInner: React.FC<AnimatedBackgroundProps> = ({ variant = 'geometric' }) => {
  const { theme } = useTheme();
  const c1 = theme.colors.accent.primary;
  const c2 = theme.colors.accent.hover;

  if (variant === 'geometric') {
    return (
      <div
        style={{
          ...BASE,
          background: `
            radial-gradient(circle 220px at 90% 12%, ${c1}0d 0%, transparent 100%),
            radial-gradient(circle 160px at 12% 62%, ${c2}12 0%, transparent 100%),
            radial-gradient(circle 120px at 82% 78%, ${c1}0a 0%, transparent 100%),
            radial-gradient(circle 80px  at 22% 32%, ${c2}0a 0%, transparent 100%),
            radial-gradient(circle 100px at 68% 72%, ${c1}0a 0%, transparent 100%)
          `,
          animation: 'bg-breathe 8s ease-in-out infinite',
          willChange: 'opacity',
        }}
      />
    );
  }

  if (variant === 'particles') {
    return (
      <div
        style={{
          ...BASE,
          background: `
            radial-gradient(circle 6px at 12% 8%,  ${c1}33 0%, transparent 100%),
            radial-gradient(circle 5px at 45% 22%, ${c2}33 0%, transparent 100%),
            radial-gradient(circle 7px at 78% 15%, ${c1}33 0%, transparent 100%),
            radial-gradient(circle 5px at 25% 55%, ${c2}33 0%, transparent 100%),
            radial-gradient(circle 6px at 60% 70%, ${c1}33 0%, transparent 100%),
            radial-gradient(circle 5px at 88% 45%, ${c2}33 0%, transparent 100%),
            radial-gradient(circle 7px at 35% 82%, ${c1}33 0%, transparent 100%),
            radial-gradient(circle 5px at 70% 90%, ${c2}33 0%, transparent 100%)
          `,
          animation: 'bg-breathe 6s ease-in-out infinite',
          willChange: 'opacity',
        }}
      />
    );
  }

  if (variant === 'waves') {
    return (
      <div
        style={{
          ...BASE,
          background: `
            linear-gradient(45deg,  transparent 30%, ${c1}10 50%, transparent 70%),
            linear-gradient(-45deg, transparent 40%, ${c2}08 60%, transparent 80%),
            radial-gradient(ellipse 60% 40% at 20% 50%, ${c1}12 0%, transparent 100%),
            radial-gradient(ellipse 50% 35% at 80% 30%, ${c2}0c 0%, transparent 100%)
          `,
          animation: 'bg-breathe 10s ease-in-out infinite',
          willChange: 'opacity',
        }}
      />
    );
  }

  if (variant === 'grid') {
    return (
      <div
        style={{
          ...BASE,
          opacity: 0.15,
          backgroundImage: `
            linear-gradient(${c1}40 1px, transparent 1px),
            linear-gradient(90deg, ${c1}40 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    );
  }

  return null;
};

export const AnimatedBackground = React.memo(AnimatedBackgroundInner);

// Single, ultra-light keyframe — opacity only (compositor property)
const animationStyles = `
@keyframes bg-breathe {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.6; }
}
`;

if (typeof document !== 'undefined' && !document.getElementById('animated-bg-styles')) {
  const style = document.createElement('style');
  style.id = 'animated-bg-styles';
  style.textContent = animationStyles;
  document.head.appendChild(style);
}