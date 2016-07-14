import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  nav: {
    padding: 20,
    margin: 10,
    minHeight: '100px',
    width: '100%',
  },
  navHead: {
    margin: 15,
  },
  pagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 4,
  },
  pagesRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    fontSize: 24,
  },
});
