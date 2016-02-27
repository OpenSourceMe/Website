import React from 'react';
import Markup from 'react-remarkable';
import data from '../data/portfolio.txt';
import theme from '../theme';

const Portfolio = (props) => {
  return (
    <div>
      <h3 style={theme.header}>Portfolio</h3>
      <Markup source={data} options={'full'}/>
    </div>
  );
};

export default Portfolio;