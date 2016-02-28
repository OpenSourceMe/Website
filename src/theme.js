/*
 * NOTE: Components require Radium to use all features of theme object.
 */

const globals = {
  primaryColor: '#BEABF6',
  secondaryColor: '#9E85F6',
  headerFamily: 'Josefin Slab, serif',
};

const theme = {
  // globals available through theme
  ...globals,
  // common styles
  header: {
    fontSize: '20pt',
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
    fontSize: '16px',
    borderRadius: '0.8em',
    float: 'right',
    padding: 15,
    margin: 15,
  }
};

export default theme;