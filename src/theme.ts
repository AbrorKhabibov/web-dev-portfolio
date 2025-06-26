export interface Theme {
  name: string;
  colors: {
    primary: {
      bg: string;
      text: string;
      accent: string;
    };
    secondary: {
      bg: string;
      text: string;
    };
    accent: {
      primary: string;
      hover: string;
    };
    neutral: {
      text: string;
      textSecondary: string;
      border: string;
    };
    button: {
      primary: {
        bg: string;
        text: string;
        hover: string;
      };
    };
  };
}

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: {
      bg: '#000000',
      text: '#FFFFFF',
      accent: '#10b981', // emerald-400
    },
    secondary: {
      bg: '#121212',
      text: '#E5E7EB',
    },
    accent: {
      primary: '#10b981', // emerald-400
      hover: '#6ee7b7', // emerald-300
    },
    neutral: {
      text: '#9CA3AF', // gray-400
      textSecondary: '#D1D5DB', // gray-300
      border: '#374151', // gray-700
    },
    button: {
      primary: {
        bg: '#10b981', // emerald-400
        text: '#000000',
        hover: '#6ee7b7', // emerald-300
      },
    },
  },
};

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: {
      bg: '#FFFFFF',
      text: '#111827', // gray-900
      accent: '#059669', // emerald-600
    },
    secondary: {
      bg: '#F9FAFB', // gray-50
      text: '#374151', // gray-700
    },
    accent: {
      primary: '#059669', // emerald-600
      hover: '#047857', // emerald-700
    },
    neutral: {
      text: '#6B7280', // gray-500
      textSecondary: '#4B5563', // gray-600
      border: '#E5E7EB', // gray-200
    },
    button: {
      primary: {
        bg: '#059669', // emerald-600
        text: '#FFFFFF',
        hover: '#047857', // emerald-700
      },
    },
  },
};

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type ThemeName = keyof typeof themes;
