import React from 'react';

const titleStyle = {
  textAlign: 'center',
};

const Title = (props) => {
  return (
    <div style={titleStyle} >
      <h1>THIS IS TITLE</h1>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Title;