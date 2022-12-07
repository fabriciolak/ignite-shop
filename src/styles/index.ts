import { createStitches } from '@stitches/react';

export const {
  createTheme,
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  theme,
  styled,
} = createStitches({
  theme: {
    colors: {
      // Commmons
      black: '#000',
      white: '#FFF',

      // Product
      green: '#00875F',
      'green-light': '#00B37E',

      // Base
      icon: '#8D8D99',
      text: '#C4C4CC',
      title: '#E1E1E6',
      elements: '#202024',
      background: '#121214',
    },

    fontSizes: {
      18: '1.125rem',
      20: '20px',
      24: '1.5rem',
      32: '2rem',
    },

    fontWeights: {
      bold: 700,
      regular: 400,
    },

    fonts: {
      roboto: 'Roboto, sans-serif',
    },
  },

  media: {
    tablet: '(max-width: 820px)',
    mobile: '(max-width: 480px)',
  },
});
