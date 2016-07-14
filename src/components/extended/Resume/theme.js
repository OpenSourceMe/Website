// import globalTheme from '../../../config/theme';

// NB: Resume uses inline styling w/o Radium, therefore no point in changing.
// It is just here where we need to find a fix, in the Markdown.
export default {
  mainColor: '#BB83FF',
  highlightColor: '#D4D4D4',
  headerColor: '#4c4c4c',
  backgroundColor: '#EBEBEB',
  markdownRules: {
    'h2, h3': {
      // ...globalTheme.header,
      fontSize: 20,
      textAlign: 'center',
      padding: '0',
      margin: '0',
    },
    h4: {
      fontSize: 16,
    },
    a: {
      // ...globalTheme.link,
    },
    'a:hover': {
      // ...globalTheme.link[':hover'], // no deep merging in spread syntax
      textDecoration: 'none',
    },
  },
};
