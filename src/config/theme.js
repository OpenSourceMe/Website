import { StyleSheet } from 'aphrodite';

/** Globals */
export const globals = {
  primaryColor: '#BEABF6',
  secondaryColor: '#9E85F6',
  headerFamily: 'Josefin Slab, serif',
  bodyFamily: "'PT Serif', sans-serif",
};


/**
 * Theme across website.
 */
const theme = StyleSheet.create({
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
});

export default theme;
