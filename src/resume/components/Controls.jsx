/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Controls component
  NOTES:
    not visible, simply starts the process of filling resume via
    utility functions. TODO: allow resume interactivity, updating.

******** */
import React from 'react';
import theme from './theme';
import resume from '../data/resume';

const buttonStyle = {
  color: theme.highlightColor,
  backgroundColor: theme.headerColor,
  border: '1px solid '+theme.mainColor,
};

const Controls = React.createClass({
  gradualFill: function() {
    this.props.actions.gradualFillResume(resume);
  },

  autoFill: function() {
    this.props.actions.fillResume(resume);
  },

  componentDidMount: function() {
    this.autoFill();
  },

  render: function() {
    return (
      <div>
      </div>
    );
  },
});

export default Controls;