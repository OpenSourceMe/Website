import React, { PropTypes } from 'react';
import { css } from 'aphrodite';
import theme from '../../../config/theme';
import Work from './Work';

const Portfolio = props => (
  <div className="container" style={{ maxWidth: '80%' }}>
    <h3 className={css(theme.header)}>{props.title}</h3>
      {props.content.map(workProps => <Work {...workProps} />)}
  </div>
);
Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Portfolio;
