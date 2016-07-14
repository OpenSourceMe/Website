import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';

const Song = (props) => (
  <div style={{ paddingTop: 20 }}>
    <h3>{props.title} <br /> <small>{props.date}</small></h3>
    <hr/>
    <div style={{ textAlign: 'center' }}>
      <iframe width="420" height="315" src={props.source} frameBorder="0" allowFullScreen />
    </div>
    <hr />
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
