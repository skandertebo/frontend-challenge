const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeOutSlow: {
          '0%': { opacity: 1 },
          '75%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        swipeIn: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '100%': { transform: 'scaleY(1)', transformOrigin: 'top' },
        },
      },
      animation: {
        fadeOut: 'fadeOut 0.5s ease-in-out',
        fadeOutSlow: 'fadeOutSlow 1.4s ease-in-out',
        fadeOutLater: 'fadeOut 0.5s 1.1s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        swipeIn: 'swipeIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
