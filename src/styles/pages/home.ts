import { styled } from '..';

export const Container = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1168px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',
  marginTop: '2rem',
  paddingLeft: '1.5rem',

  variants: {
    size: {
      tablet: {
        padding: 0,
      },
      mobile: {
        padding: 0,
      },
    },
  },
});
