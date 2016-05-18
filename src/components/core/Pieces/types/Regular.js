import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { Style } from 'radium';
import { markdownRules } from '../../../../theme';

const styles = {
  container: {
    paddingTop: '20px',
  },
};

const Regular = (props) => (
  <div style={styles.container}>
    <h3>{props.title} <br /> <small>{props.date}</small></h3>
    <hr/>
    <Style rules={markdownRules} />
    <Markdown
      options={'full'}
      source={props.content}
    />
  </div>
);
Regular.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default Regular;
