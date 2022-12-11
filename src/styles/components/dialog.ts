import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const DialogOverlay = styled(Dialog.Overlay, {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  inset: 0,
});

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  margin: '0 auto',
  padding: '2.25rem 3rem',
  background: '$elements',

  header: {
    width: '100%',
  },
});

export const DialogClose = styled(Dialog.Close, {
  width: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 'auto',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  background: 'transparent',
});

export const DialogTitle = styled(Dialog.Title, {
  fontSize: '$20',
  fontWeight: 700,
  lineHeight: 1.6,
  marginTop: '1.5rem',
  color: '$title',
});

export const DialogContentItens = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
});

export const DialogItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  height: '94px',

  '.dialog-item-image': {
    width: '101.94px',
    height: '93px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.25rem',
    borderRadius: 8,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',

    img: {
      width: '100%',
      objectFit: 'contain',
    },
  },

  '.dialog-item': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    '.dialog-item-content': {
      p: {
        fontSize: '$18',
        lineHeight: 1.6,
      },
      span: {
        fontSize: '$18',
        fontWeight: 700,
        lineHeight: 1.6,
        color: '$title',
      },
    },

    button: {
      width: '4.0625rem',
      border: 0,
      outline: 0,
      fontSize: '1rem',
      fontWeight: 700,
      cursor: 'pointer',
      color: '$green',
      background: 'transparent',
    },
  },
});

export const DialogFooter = styled('footer', {
  width: '100%',
  marginTop: 'auto',

  ul: {
    listStyle: 'none',
    marginBottom: '3.5625rem',

    li: {
      display: 'flex',
      justifyContent: 'space-between',

      '&.product-quantity': {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: '$title',

        span: {
          fontSize: '$18',
          lineHeight: 1.6,
          color: '$text',
        },
      },

      '&.product-total': {
        fontSize: '$18',
        fontWeight: 700,
        lineHeight: 1.6,
        color: '$title',

        span: {
          fontSize: '$24',
          lineHeight: 1.4,
        },
      },
    },
  },

  button: {
    width: '100%',
    maxWidth: '24rem',
    height: '4.3125rem',
    padding: '1.25rem 2rem',
    borderRadius: 8,
    border: 'none',
    outline: 'none',
    background: '$green',
    fontSize: '$18',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$white',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
});
