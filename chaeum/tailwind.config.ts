import type { Config } from 'tailwindcss';
import colors from './src/styles/colors';
import defaultColors from 'tailwindcss/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        ...colors,
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px) translateY(0)' },
          '100%': { opacity: '1', transform: 'translateX(0)  translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)  translateY(0)' },
          '100%': { opacity: '1', transform: 'translateX(0)  translateY(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
