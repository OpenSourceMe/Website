import React from 'react';
import Radium from 'radium';
import theme from '../../../theme';

const styles = {
  marginTop: '2em',
  marginBottom: '5em',
};

// note: radium requires keys
const Footer = (props) => {
  return (
    <div className='row' style={styles}>
      <br />
      <hr />
      <div key={1} className="col-md-4 text-center">
        thanks for reading!
      </div>
      <div key={2} className="col-md-4 text-center">
        <a key={4} style={theme.link} href='https://github.com/breezykermo/lachlankermode.com'>lachlankermode.com on Github</a>
      </div>
      <div key={3} className="col-md-4 text-center">
        <a key={5} style={theme.link} href='https://www.twitter.com/lachlankermode'>Twitter Me.</a>
      </div>
    </div>
  );
};

export default Radium(Footer);