/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: Portfolio.
  NOTES:

******** */
import React from 'react';
import Markdown from 'react-remarkable';
import theme from '../theme';
import { Style } from 'radium';
/** Markdown Styles */
const rules = {
  'h4': {
    ...theme.header,
    textAlign: 'center',
    fontSize: '20px',
  },
  'h3': {
    ...theme.header,
    textAlign: 'right',
  },
  'a': {
    ...theme.link
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
  'p': {
    fontFamily: 'Helvetica',
    fontSize: '16px',
    lineHeight: '22px',
  }
}

const styles = {
  body: {
    maxWidth: '80%',
  },
  work: {
    paddingBottom: '2em',
    margin: '4em',
  },
  techs: {
    textAlign: 'center',
  },
};

// just a quickee
// should eventually factor this to redux
const Work = (props) => {

  return (
    <div style={styles.work}>
      <h4><a href={props.link}>{props.name}</a></h4>
      <div style={styles.techs}>
        {props.technologies}
      </div>
    </div>
  );
};

const Portfolio = (props) => {
  return (
    <div className='container' style={styles.body}>
      <Style rules={rules} />
      <h3 style={theme.header}>portfolio</h3>
        <Work name='Paideia Institute Website' link='http://www.paideiainstitute.org/' technologies='Nationbuilder, Sass, Foundation, JavaScript' />
        <Work name='Personal Website (what you see here)' link='http://lachlankermode.com' technologies='React | Redux' />
    </div>
  );
};

export default Portfolio;