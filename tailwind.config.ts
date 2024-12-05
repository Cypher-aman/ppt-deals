import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main brownish colors
        accent: '#6F4F1E', // Primary brown accent color
        beige: '#F4E1C1', // Background color (light beige)
        darkbrown: '#3E2A47', // Headline text color (dark brown)
        mediumbrown: '#5C4033', // Body text color (medium brown)
        mutedbrown: '#8B5E3C', // Link color (muted brown)
        lightbrown: '#D1B2A1', // Border color (light brownish gray)
        saddlebrown: '#8B4513', // Button hover color (saddle brown)
        error: '#E74C3C', // Error color (crimson red)
        success: '#27AE60', // Success color (emerald green)
      },
      textColor: {
        // Custom text colors
        primary: '#5C4033', // Default body text color
        heading: '#3E2A47', // Headline text color
        link: '#8B5E3C', // Link text color
      },
      backgroundColor: {
        // Custom background colors
        primary: '#F4E1C1', // Background color (light beige)
      },
      borderColor: {
        // Custom border colors
        primary: '#D1B2A1', // Border color (light brownish gray)
      },
      hover: {
        primary: '#8B4513', // Hover state color for buttons (saddle brown)
      },
    },
  },
  plugins: [],
} satisfies Config;
