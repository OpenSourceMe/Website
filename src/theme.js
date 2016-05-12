/* ********
  AUTHOR: breezykermo
  DATE: 30 March 2016 (Wednesday)
  DESCRIPTION: Global themes for the site.
  NOTES:
    Theme styles require radium.

******** */
/** Globals */
const globals = {
  primaryColor: '#BEABF6',
  secondaryColor: '#9E85F6',
  headerFamily: 'Josefin Slab, serif',
  bodyFamily: "'PT Serif', sans-serif",
};
/** Main theme object */
const theme = {
  // globals available through theme
  ...globals,
  // common styles
  header: {
    fontSize: 40,
    lineHeight: '55px',
    fontFamily: globals.headerFamily,
  },
  link: {
    cursor: 'crosshair',
    color: globals.secondaryColor,
    textDecoration: 'none',
    ':hover': {
      color: globals.primaryColor,
    },
  },
  navItem: {
    cursor: 'crosshair',
    fontFamily: globals.headerFamily,
    color: globals.secondaryColor,
    textDecoration: 'none',
    fontSize: '22px',
    borderRadius: '0.8em',
    float: 'right',
    padding: 15,
    margin: 15,
  },
};
/** Markdown rules for blog */
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
