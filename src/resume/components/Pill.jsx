/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Pill component
  NOTES:

******** */
import React from 'react';
import theme from './theme';

const pillOuter = {
  padding: 0,
  margin: 0,
};

const pillLeft = {
  fontSize: 10,
  fontFamily: 'Helvetica',
};

const pillBody = {
  textAlign: 'left',
  margin: 0,
  padding: '0 5px',
};

const subheaderStyle = {
  margin: '0 0 4px 0',
  fontSize: 18,
};

const pillParagraphStyle = {
  fontSize: 12,
};

const pillRight = {
  fontSize: 8,
};

const Pill = (props) => {
  return (
    <div className='col-xs-12' style={pillOuter}>
      <div className="col-xs-2" style={pillLeft}>
        {props.left}
      </div>
      <div className="col-xs-8" style={pillBody}>
        <h4 style={subheaderStyle}>{props.body.title}</h4>
        <p style={pillParagraphStyle}>{props.body.content}</p>
      </div>
      <div className="col-xs-2" style={pillRight}>
        {props.right}
      </div>
    </div>
  );
};

export default Pill;