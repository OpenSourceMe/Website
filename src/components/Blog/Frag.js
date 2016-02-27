import React from 'react';
import Radium from 'radium';
import theme from '../../theme.js';

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

const Frag = (props) => {
  return (
    <div onClick={props.onClickHandler} className='row'>
      <div className='col-md-6 col-md-offset-3'>
        <div style={styles.date}>{props.date}</div>
        <a style={styles.title}>{props.title}</a>
        <hr/>
      </div>
    </div>
  );
};

export default Radium(Frag);