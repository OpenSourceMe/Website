import theme from '../../../theme';

export default {
  nav: {
    padding: 20,
    margin: 10,
    height: '100px',
    width: '100%',
  },
  navHead: {
    ...theme.header,
    ...theme.link,
    padding: 15,
    margin: 15,
    // position: 'fixed',
    // left: 100,
    // top: 20,
  },
  pagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 4,
  },
  page: {
    flex: 1,
  },
};
