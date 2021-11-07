import { style } from '@vanilla-extract/css';

export const ImageWrapperStyle = style({
  margin: '0 auto 30px',
  display: 'flex',
  justifyContent: 'center',
  padding: '40px',
  boxShadow: '0 0 15px rgb(0 0 0 / 15%)',
  borderRadius: '10px',
  width: '400px',
  height: '400px',
});

export const NoImageStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '40px',
  fontWeight: 'bold',
});

