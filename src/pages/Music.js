import React from 'react';
import Markup from 'react-remarkable';
import data from '../data/music.txt';
import theme from '../theme';

const Music = (props) => {
  return (
    <div>
      <h3 style={theme.header}>Music</h3>
      <Markup source={data} options={'full'}/>
    </div>
  );
};

export default Music;