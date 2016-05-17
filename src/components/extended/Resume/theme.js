import globalTheme from '../../../theme';
// console.log(globalTheme);

export default {
  mainColor: '#BB83FF',
  highlightColor: '#D4D4D4',
  headerColor: '#4c4c4c',
  backgroundColor: '#EBEBEB',
  markdownRules: {
    ...globalTheme,
    h3: {
      textAlign: 'right',
    },
    a: {
      ...globalTheme.link,
      ':hover': globalTheme.link[':hover'],
    },
    body: {
      fontSize: '15px',
      lineHeight: '17px',
    },
  },
};
