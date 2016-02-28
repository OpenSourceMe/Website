import React from 'react';
import Markdown from 'react-remarkable';
import theme from '../theme';
import { Style } from 'radium';

const styles = {
  body: {
    maxWidth: '80%',
  },
};

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

const PageContent = (props) => {
  return (
    <div className='container' style={styles.body}>
      <h3 style={theme.header}>{props.title}</h3>
      <Style rules={rules} />
      <Markdown
        options={{
          html: true,
        }}
        source={props.content} />
    </div>
  );
};

export default PageContent;