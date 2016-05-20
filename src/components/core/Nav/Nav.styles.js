import theme from '../../../config/theme';

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
    ...theme.header,
    ...theme.link,
    fontSize: 24,
  },
};
