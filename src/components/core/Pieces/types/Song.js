import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { Style } from 'radium';
import { markdownRules } from '../../../../config/theme';

const styles = {
  container: {
    paddingTop: '20px',
  },
  video: {
    textAlign: 'center',
  },
};

const Song = (props) => (
  <div style={styles.container}>
    <h3>{props.title} <br /> <small>{props.date}</small></h3>
    <hr/>
    <div style={styles.video}>
      <iframe width="420" height="315" src={props.source} frameBorder="0" allowFullScreen />
    </div>
    <hr />
    <Style rules={markdownRules} />
    <Markdown
      options={'full'}
      source={props.lyrics}
    />
  </div>
);
Song.propTypes = {
  date: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default Song;
