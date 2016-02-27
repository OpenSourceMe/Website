import React from 'react';
import Page from '../components/Page'
import data from '../data/portfolio.txt';

const Portfolio = (props) => {
  return (
    <div>
      <Page title='portfolio' content={data} />
    </div>
  );
};

export default Portfolio;