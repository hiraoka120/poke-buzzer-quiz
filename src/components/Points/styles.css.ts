import { style, styleVariants } from '@vanilla-extract/css';

export const PointsWrapperStyle = style({
  width: '400px',
  margin: '0 auto 20px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const PointStyle = styleVariants({
  active: {},
  inactive: {filter: 'grayscale(100%)'}
});