import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';

const Regular = (props) => (
  <div style={{ paddingTop: 20 }}>
    <h3>
      {props.title}
      <br />
      <small>{props.date}</small>
    </h3>
    <hr/>
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
