import React from 'react';
import Markdown from 'react-remarkable';
import theme from '../theme';
import { Style } from 'radium';

// styles for markdown
const rules = {
  'h3': {
    ...theme.header,
    textAlign: 'right',
  },
  'a': {
    ...theme.link
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
  'p': {
    fontFamily: 'Helvetica',
    fontSize: '16px',
    lineHeight: '22px',
  }
}

const Page = (props) => {
  return (
    <div>
      <h3 style={theme.header}>{props.title}</h3>
      <Style rules={rules} />
      <Markdown
        options={'full', {
          full: true,
          html: true,
          typographer: true,
          linkify: true,
        }}
        source={props.content} />
    </div>
  );
};

export default Page;