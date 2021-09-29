import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
  borderStyle: 'solid',
  borderWidth: 0
});

globalStyle('main', {
  display: 'block'
});

globalStyle('p, table, blockquote, address, pre, iframe, form, figure, dl', {
  margin: 0
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  margin: 0
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

globalStyle('a', {
  backgroundColor: 'transparent',
  textDecoration: 'none',
  color: 'inherit'
});

globalStyle('svg, img, embed, object, iframe', {
  verticalAlign: 'bottom'
});

globalStyle('button, input, optgroup, select, textarea', {
  appearance: 'none',
  verticalAlign: 'middle',
  color: 'inherit',
  font: 'inherit',
  background: 'transparent',
  padding: 0,
  margin: 0,
  borderRadius: 0,
  textAlign: 'inherit',
  textTransform: 'inherit'
});

globalStyle('[type="checkbox"]', {
  appearance: 'checkbox'
});

globalStyle('[type="radio"]', {
  appearance: 'radio'
});

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  cursor: 'pointer'
});

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  cursor: 'pointer'
});

globalStyle('button:disabled, [type="button"]:disabled, [type="reset"]:disabled, [type="submit"]:disabled', {
  cursor: 'default'
});

globalStyle('body', {
  margin: 0,
  background: '#fff',
  color: '#313131',
  fontSize: '14px',
  lineHeight: 1.5,
  maxWidth: 100
});

