import { styled } from '..';

export const Container = styled('header', {
  width: '100%',
  maxWidth: 1168,
  height: '3.25rem',
  margin: '0 auto',
  marginTop: '2.5rem',
  padding: '0 1.5rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
    },
  },
});

export const HeaderIcon = styled('div', {
  position: 'relative',
  width: '3rem',
  height: '3rem',
  borderRadius: 6,
  background: '$elements',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  div: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: '1.5rem',
    height: '1.5rem',
    borderRadius: '500px',
    background: '$green',
    border: '3px solid $background',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    show: {
      false: {
        display: 'none',
      },
    },
  },
});
