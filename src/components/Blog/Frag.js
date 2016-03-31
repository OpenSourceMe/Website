/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: Frag for Blog homepage.
  NOTES:

******** */
import React, { PropTypes } from 'react';
import theme from '../../theme.js';

/** Styles */
const styles = {
  title: {
    ...theme.link,
    fontSize: '18pt',
    fontFamily: theme.headerFamily,
  },
  date: {
    fontSize: 14,
    fontWeight: 'lighter',
    color: 'gray',
  },
};
/**
 * Frag, display meta of Blog post.
 */
const Frag = (props) => (
  <div onClick={props.onClickHandler} className="row">
    <div className="col-md-6 col-md-offset-3">
      <div style={styles.date}>{props.date}</div>
      <a style={styles.title}>{props.title}</a>
      <hr/>
    </div>
  </div>
);
Frag.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default Frag;
