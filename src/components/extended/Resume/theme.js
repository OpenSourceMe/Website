import globalTheme from '../../../theme';
// console.log(globalTheme);

export default {
  mainColor: '#BB83FF',
  highlightColor: '#D4D4D4',
  headerColor: '#4c4c4c',
  backgroundColor: '#EBEBEB',
  markdownRules: {
    'h2, h3': {
      ...globalTheme.header,
      fontSize: 20,
      textAlign: 'center',
      padding: '0',
      margin: '0',
    },
    h4: {
      fontSize: 16,
    },
    a: {
      ...globalTheme.link,
    },
    'a:hover': {
      ...globalTheme.link[':hover'], // no deep merging in spread syntax
      textDecoration: 'none',
    },
  },
};
