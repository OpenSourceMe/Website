import { StyleSheet } from 'aphrodite';

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

const theme = StyleSheet.create({
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
});

export default theme;
