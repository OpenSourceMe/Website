import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { Style } from 'radium';
import { markdownRules } from '../../../theme';

/** Styles */
const styles = {
  container: {
    paddingTop: '20px',
  },
};
/** Markdown rules */
const blogStyle = markdownRules;
/**
 * A regular post, with Markdown content.
 */
const RegularPost = (props) => (
  <div style={styles.container}>
    <h3>{props.title} <br /> <small>{props.date}</small></h3>
    <hr/>
    <Style rules={blogStyle} />
    <Markdown
      options={'full'}
      source={props.content}
    />
  </div>
);
RegularPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default RegularPost;
