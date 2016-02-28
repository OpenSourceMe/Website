import React from 'react';
import Markdown from 'react-remarkable';
import { Style } from 'radium';
import theme from '../../theme';


const styles = {
  container: {
    paddingTop: '20px',
  },
  video: {
    textAlign: 'center',
  },
};

const blogStyle = {
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
};

const SongPost = (props) => {
  return (
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
        source={props.lyrics} />
    </div>
  );
};

export default SongPost;