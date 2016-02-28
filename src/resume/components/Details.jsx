/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Details component
  NOTES:

******** */
import React from 'react';

const detailsStyle = {
  padding: '5px',
  margin: '10px',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '5px',
  textAlign: 'right',
};

const formatDetail = (key, value) => {
  switch(key) {
    case 'location':
      return <span style={{fontWeight: 'bold'}}>{value}</span>
    case 'email':
      return <a href={"mailto:"+value}>{value}</a>
    case 'website':
      const link = value.match(/^https?:\/\//) ? value : 'http://' + value;
      return <a href={link}>{value}</a>
    default:
      return value;
  }
};

const Details = (props) => {
  const detailsList = Object.keys(props).map(key => {
    return (
      <li key={key}>
        {formatDetail(key, props[key])}
      </li>
    );
  });

  return (
    <div style={detailsStyle} >
      <ul style={listStyle}>
        {detailsList}
      </ul>
    </div>
  );
};

export default Details;