import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  work: {
    paddingBottom: '2em',
    margin: '4em',
  },
  tag: {
    textAlign: 'center',
  },
});

const Work = (props) => (
  <div className={css(styles.work)}>
    <h4><a href={props.link}>{props.title}</a></h4>
    <div className={css(styles.tag)}>
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
