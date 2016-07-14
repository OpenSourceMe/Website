import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { css } from 'aphrodite';
import theme from '../../../config/theme';

const MarkDown = (props) => (
  <div className="container">
    <h3 className={css(theme.header)}>{props.title}</h3>
    <hr />
    <Markdown
      options={{ html: true }}
      source={props.content}
    />
  </div>
);
MarkDown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MarkDown;
