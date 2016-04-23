/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Skill component
  NOTES:

******** */
import React from 'react';
import theme from './theme';

const hrStyle = {
  margin: '5px',
  borderColor: theme.highlightColor,
  backgroundColor: theme.highlightColor,
  color: theme.highlightColor,
};

const formatType = (text) => {
  const mostOfType = text.substring(0, text.length - 3);
  const lastThreeChars = text.substring(text.length - 3);
  return (
    <span>
      {mostOfType}
      <span style={{color: theme.mainColor}}>
        {lastThreeChars}
      </span>
    </span>
  );
};

const Skill = (props) => {
  const values = props.values.map(value => {
    return <li key={value}>{value}</li>;
  });

  return (
    <div>
      <h4>{formatType(props.name)}</h4>
      <hr style={hrStyle} />
      <ul>
        {values}
      </ul>
    </div>
  );
};

export default Skill;