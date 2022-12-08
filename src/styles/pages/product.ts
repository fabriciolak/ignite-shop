import { styled } from '..';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1168,
  height: 656,
  margin: '0 auto',
});

export const ProductImage = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
});

export const ProductContainer = styled('div', {
  width: '100%',
  height: 656,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 72,
  margin: '0 auto',
  paddingTop: 10,
});

export const ProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',

  div: {
    h1: {
      fontSize: '$32',
      fontWeight: '$bold',
      lineHeight: 1.6,
      color: '$text',
      // marginBottom: '1rem',
    },

    span: {
      fontSize: '$32',
      fontWeight: '$bold',
      lineHeight: 1.6,
      color: '$green-light',
    },

    p: {
      fontSize: '$18',
      color: '$text',
      fontWeight: '$regular',
      lineHeight: 1.6,
      marginTop: '2.5rem',
    },
  },

  button: {
    width: '32.5rem',
    height: '4.3125rem',
    marginTop: 'auto',
    borderRadius: 8,
    color: '$white',
    background: '$green',
    fontSize: '$18',
    fontWeight: '$bold',
    lineHeight: 1.6,
  },
});
