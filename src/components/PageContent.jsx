import React from 'react';
import Markdown from 'react-remarkable';
import theme, { markdownRules } from '../theme';
import { Style } from 'radium';

const styles = {
  body: {
    maxWidth: '80%',
  },
};

// styles for markdown
const rules = markdownRules;

const PageContent = (props) => {
  return (
    <div className='container' style={styles.body}>
      <h3 style={theme.header}>{props.title}</h3>
      <hr />
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