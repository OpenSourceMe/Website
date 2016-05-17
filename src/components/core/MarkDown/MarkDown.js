import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import theme, { markdownRules } from '../../../theme';
import { Style } from 'radium';

const styles = {
  body: {
    maxWidth: '80%',
  },
};

const MarkDown = (props) => (
  <div className="container" style={styles.body}>
    <h3 style={theme.header}>{props.title}</h3>
    <hr />
    <Style rules={markdownRules} />
    <Markdown
      options={{ html: true }}
      source={props.content}
    />
  </div>
);
MarkDown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MarkDown;
