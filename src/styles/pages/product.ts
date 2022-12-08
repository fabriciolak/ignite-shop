import { styled } from '..';

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1168,
  minHeight: 656,
  margin: '0 auto',
  marginTop: '2rem',
  padding: '0 1.5rem',
});

export const ProductImage = styled('div', {
  width: '100%',
  maxWidth: '36rem',
  minHeight: 656,
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

  img: {
    objectFit: 'contain',
  },

  variants: {
    size: {
      medium: {
        gridTemplateColumns: '1fr',
        maxWidth: '100%',
      },
      large: {
        maxWidth: '30rem',
      },
      tablet: {
        maxWidth: '26rem',
      },
    },
  },
});

export const ProductContainer = styled('div', {
  width: '100%',
  minHeight: 656,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 72,
  margin: '0 auto',
  paddingTop: 10,

  variants: {
    size: {
      medium: {
        gridTemplateColumns: '1fr',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
      },
      mobile: {
        gridTemplateColumns: '420px',
        p: {
          textAlign: 'justify',
        },
        button: {
          marginTop: 120,
        },
      },
    },
  },
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
      fontWeight: '$regular',
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
    width: '100%',
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
