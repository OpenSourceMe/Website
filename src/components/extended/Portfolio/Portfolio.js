import React, { PropTypes } from 'react';
import theme from '../../../theme';
import { Style } from 'radium';
import Work from './Work';

const rules = {
  h4: {
    ...theme.header,
    textAlign: 'center',
    fontSize: '20px',
  },
  h3: {
    ...theme.header,
    textAlign: 'right',
  },
  a: {
    ...theme.link,
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
  p: {
    fontFamily: 'Helvetica',
    fontSize: '16px',
    lineHeight: '22px',
  },
};

const styles = {
  body: {
    maxWidth: '80%',
  },
};

const Portfolio = props => (
  <div className="container" style={styles.body}>
    <Style rules={rules} />
    <h3 style={theme.header}>{props.title}</h3>
      {props.content.map(workProps => <Work {...workProps} />)}
  </div>
);
Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Portfolio;
