import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import theme, { globals } from '../../../config/theme';

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontFamily: globals.headerFamily,
  },
  date: {
    fontSize: 18,
    fontWeight: 'lighter',
    color: 'gray',
  },
});

const Frag = (props) => (
  <div onClick={props.onClickHandler} className="row">
    <div className="col-md-6 col-md-offset-3">
      <div className={css(styles.date)}>{props.date}</div>
      <a className={css(theme.link, styles.title)}>{props.title}</a>
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
