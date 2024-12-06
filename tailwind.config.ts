import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1400px',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.mono],
      },
      colors: {
        primary: '#FF6F61', // Soft Coral (Primary Accent Color)
        secondary: '#2F3A46', // Slate Gray (Text & Headings)
        background: '#F5F5F5', // Off-White (Background Color)
        cardBackground: '#E8E8E8', // Light Gray (Card Background)
        hoverPrimary: '#FF8C72', // Light Coral (Button Hover)
        border: '#D1D5DB', // Light Slate Gray (Borders)
        link: '#5A6B8E', // Medium Slate Blue (Links)
        textPrimary: '#333333', // Charcoal Gray (Text)
        success: '#4CAF50', // Soft Green (Success Color)
        error: '#E74C3C', // Soft Red (Error Color)
        disabled: '#B0B0B0', // Light Gray (Disabled)
      },
      textColor: {
        primary: '#333333', // Charcoal Gray (General Text)
        secondary: '#2F3A46', // Slate Gray (Secondary Text)
        link: '#5A6B8E', // Medium Slate Blue (Link Color)
      },
      backgroundColor: {
        primary: '#F5F5F5', // Off-White (Background)
        card: '#E8E8E8', // Light Gray (Card Background)
        success: '#4CAF50', // Soft Green (Success Background)
        error: '#E74C3C', // Soft Red (Error Background)
        disabled: '#B0B0B0', // Light Gray (Disabled Background)
      },
      borderColor: {
        primary: '#D1D5DB', // Light Slate Gray (Borders)
      },
      boxShadow: {
        primary: '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
