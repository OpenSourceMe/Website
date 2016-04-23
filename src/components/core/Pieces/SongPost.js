/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: A post of a song, with lyrics.
  NOTES:

******** */
import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { Style } from 'radium';
import theme, { markdownRules } from '../../../theme';

/** Styles */
const styles = {
  container: {
    paddingTop: '20px',
  },
  video: {
    textAlign: 'center',
  },
};
const blogStyle = markdownRules;
/**
 * A post of a song, with lyrics.
 */
const SongPost = (props) => (
  <div style={styles.container}>
    <h3>{props.title} <br /> <small>{props.date}</small></h3>
    <hr/>
    <div style={styles.video}>
      <iframe width="420" height="315" src={props.source} frameBorder="0" allowFullScreen />
    </div>
    <hr />
    <Style rules={blogStyle} />
    <Markdown
      options={'full'}
      source={props.lyrics}
    />
  </div>
);
SongPost.propTypes = {
  date: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default SongPost;
