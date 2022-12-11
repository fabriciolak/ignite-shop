import { styled } from '..';

export const Container = styled('div', {
  width: '100%',
  maxWidth: '73rem',
  margin: '0 auto',
  marginTop: '6.5rem',
  padding: '0 1.5rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 24,

  h2: {
    fontSize: '$32',
    fontWeight: '$bold',
    lineHeight: 1.4,
    color: '$title',
  },

  p: {
    maxWidth: 590,
    textAlign: 'center',
    fontSize: '$24',
    fontWeight: '$regular',
    lineHeight: 1.4,
    marginBottom: '3rem',
  },

  button: {
    fontSize: '$20',
    fontWeight: '$bold',
    lineHeight: 1.6,
    color: '$green',
    border: 0,
    outline: 0,
    background: 'transparent',
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '-3.125rem',

  img: {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
    borderRadius: '1000px',
    marginLeft: '-3.125rem',
  },
});
