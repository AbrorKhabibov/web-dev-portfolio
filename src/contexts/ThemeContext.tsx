import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeName } from '../theme';
import { themes } from '../theme';

interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  toggleTheme: () => void;
  setTheme: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeName;
    return savedTheme && themes[savedTheme] ? savedTheme : 'dark';
  });

  const theme = themes[themeName];

  useEffect(() => {
    localStorage.setItem('theme', themeName);
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary-bg', theme.colors.primary.bg);
    root.style.setProperty('--color-primary-text', theme.colors.primary.text);
    root.style.setProperty('--color-primary-accent', theme.colors.primary.accent);
    root.style.setProperty('--color-secondary-bg', theme.colors.secondary.bg);
    root.style.setProperty('--color-secondary-text', theme.colors.secondary.text);
    root.style.setProperty('--color-accent-primary', theme.colors.accent.primary);
    root.style.setProperty('--color-accent-hover', theme.colors.accent.hover);
    root.style.setProperty('--color-neutral-text', theme.colors.neutral.text);
    root.style.setProperty('--color-neutral-text-secondary', theme.colors.neutral.textSecondary);
    root.style.setProperty('--color-neutral-border', theme.colors.neutral.border);
    root.style.setProperty('--color-button-primary-bg', theme.colors.button.primary.bg);
    root.style.setProperty('--color-button-primary-text', theme.colors.button.primary.text);
    root.style.setProperty('--color-button-primary-hover', theme.colors.button.primary.hover);
  }, [theme]);

  const toggleTheme = () => {
    setThemeName((current: ThemeName) => current === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (newThemeName: ThemeName) => {
    setThemeName(newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
