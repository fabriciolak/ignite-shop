import { styled } from '..';

export const Container = styled('article', {
  position: 'relative',
  maxWidth: 696,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  borderRadius: 8,
  padding: '4px',

  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  overflow: 'hidden',

  a: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '&:hover footer': {
    display: 'flex',
    bottom: '9px',
  },

  variants: {
    size: {
      tablet: {
        footer: {
          display: 'flex',
          bottom: '9px',
        },
      },
    },
  },
});

export const Footer = styled('footer', {
  position: 'absolute',
  bottom: '-120px',
  width: '97%',
  // maxWidth: '43rem',
  height: '6.875rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.25rem',

  borderRadius: 6,
  background: '$elements',
  transition: 'all 0.2s ease-in-out',

  div: {
    h2: {
      fontSize: '$20',
      fontWeight: '$bold',
      lineHeight: 1.6,
      color: '$title',
    },

    span: {
      fontSize: '$24',
      fontWeight: '$bold',
      lineHeight: 1.4,
      color: '$green-light',
    },
  },

  button: {
    border: 0,
    outline: 0,
    width: '3.5rem',
    height: '3.5rem',

    display: 'flex',
    justifyContent: 'center ',
    alignItems: 'center',
    borderRadius: 6,
    background: '$green',
    color: '$white',

    cursor: 'pointer',
  },
});
