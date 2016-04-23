import React, { PropTypes } from 'react';

const styles = {
  work: {
    paddingBottom: '2em',
    margin: '4em',
  },
  tag: {
    textAlign: 'center',
  },
};

const Work = (props) => (
  <div style={styles.work}>
    <h4><a href={props.link}>{props.title}</a></h4>
    <div style={styles.tag}>
      {props.tag}
    </div>
  </div>
);
Work.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Work;
