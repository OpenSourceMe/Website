import React, { PropTypes } from 'react';
import theme from './theme';

const styles = {
  hr: {
    margin: '5px',
    borderColor: theme.highlightColor,
    backgroundColor: theme.highlightColor,
    color: theme.highlightColor,
  },
};

const formatType = (text) => {
  const mostOfType = text.substring(0, text.length - 3);
  const lastThreeChars = text.substring(text.length - 3);
  return (
    <span>
      {mostOfType}
      <span style={{ color: theme.mainColor }}>
        {lastThreeChars}
      </span>
    </span>
  );
};

const Skill = (props) => (
  <div>
    <h4>{formatType(props.name)}</h4>
    <hr style={styles.hr} />
    <ul>
      {props.values.map(value => <li key={value}>{value}</li>)}
    </ul>
  </div>
);
Skill.propTypes = {
  values: PropTypes.array.isRequired,
  name: PropTypes.string,
};

export default Skill;
