import React from 'react';
import Page from '../components/Page'
import data from '../data/music.txt';

const Music = (props) => {
  return (
    <div>
      <Page title='music' content={data} />
    </div>
  );
};

export default Music;