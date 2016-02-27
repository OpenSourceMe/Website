import React from 'react';

const Frag = (props) => {
  return (
    <div className='Frag' onClick={props.onClickHandler}>
      <div className='date'>{props.date}</div>
      <a>{props.title}</a>
    </div>
  );
};

export default Frag;