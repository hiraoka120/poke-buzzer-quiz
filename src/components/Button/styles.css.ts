import { style } from '@vanilla-extract/css';

export const ButtonWrapperStyle = style({
  marginBottom: '20px'
});

export const ButtonStyle = style({
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  boxShadow: '0 0 10px rgb(0 0 0 / 15%)',
  borderRadius: '60px',
  minWidth: '280px',
  height: '52px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#84c3f6',
  ':hover': {
    opacity: '0.8'
  },

});