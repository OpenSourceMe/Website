import React from 'react';

const titleStyle = {
  textAlign: 'center',
};

const Title = (props) => {
  return (
    <div style={titleStyle} >
      <h3>{props.title}</h3>
    </div>
  );
};

export default Title;