import React, { PropTypes } from 'react';
import theme from '../../../config/theme';

const styles = {
  title: {
    ...theme.link,
    fontSize: 32,
    fontFamily: theme.headerFamily,
  },
  date: {
    fontSize: 18,
    fontWeight: 'lighter',
    color: 'gray',
  },
};

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
