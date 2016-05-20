/**
 * Theme across website.
 */
/** Globals */
export const globals = {
  primaryColor: '#BEABF6',
  secondaryColor: '#9E85F6',
  headerFamily: 'Josefin Slab, serif',
  bodyFamily: "'PT Serif', sans-serif",
};

const theme = {
  ...globals,
  header: {
    fontSize: 40,
    lineHeight: '55px',
    fontFamily: globals.headerFamily,
  },
  link: {
    cursor: 'pointer',
    color: globals.secondaryColor,
    textDecoration: 'none',
    ':hover': {
      color: globals.primaryColor,
    },
  },
};

export const markdownRules = {
  h3: {
    ...theme.header,
    textAlign: 'right',
  },
  a: {
    ...theme.link,
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
  body: {
    fontFamily: globals.bodyFamily,
    fontSize: '20px',
    lineHeight: '30px',
  },
};

export default theme;
