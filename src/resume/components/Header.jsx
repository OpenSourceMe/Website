/* ********
  AUTHOR: breezykermo
  DATE: 07 February 2016 (Sunday)
  DESCRIPTION: Header component.
  NOTES:
    Example of a React Stateless Function
    https://facebook.github.io/react/docs/reusable-components.html#stateless-functions

******** */
import React from 'react';
import theme from './theme';

const headerStyle = {
  borderRadius: '0 0 2px 2px',
  backgroundColor: theme.headerColor,
  fontFamily: '"Lato", sans-serif', /* defined in HTML */
  color: 'white',
  padding: '1em 0',
};

const weightedStyle = {
  fontWeight: 'bold',
  color: theme.mainColor,
};

const smallerStyle = {
  fontSize: '16px',
  color: theme.highlightColor,
};

const Header = (props) => {
  const firstName = props.name.split(' ')[0];
  const lastName = props.name.split(' ')[1];

  return (
    <div className='panel text-center' style={headerStyle}>
    <h2 style={{lineHeight: '0.8'}}>
      {firstName}<span style={weightedStyle}>{lastName}</span> <br />
      <small style={smallerStyle}>{props.profession}</small>
    </h2>
    </div>
  )
}

export default Header