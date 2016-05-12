import theme from '../../../theme';

export default {
  nav: {
    padding: 20,
    margin: 10,
    minHeight: '100px',
    width: '100%',
  },
  navHead: {
    ...theme.header,
    ...theme.link,
    // padding: 15,
    margin: 15,
  },
  pagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 4,
  },
  page: {
    flex: 1,
    ...theme.header,
    ...theme.link,
  },
};
