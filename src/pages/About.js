import React from 'react';
import Page from '../components/Page'
import data from '../data/about.txt';

const About = (props) => {
  return (
    <div>
      <Page title='about' content={data} />
    </div>
  );
};

export default About;