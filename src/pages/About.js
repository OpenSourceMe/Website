import React from 'react';
import Markup from 'react-remarkable';
import data from '../data/about.txt';
import theme from '../theme';

const About = (props) => {
  return (
    <div>
      <h3 style={theme.header}>About</h3>
      <Markup source={data} options={'full'}/>
    </div>
  );
};

export default About;