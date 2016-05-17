import React, { PropTypes } from 'react';
import theme from './theme';

const styles = {
  header: {
    borderRadius: '0 0 2px 2px',
    backgroundColor: theme.headerColor,
    fontFamily: '"Lato", sans-serif', /* defined in HTML */
    color: 'white',
    padding: '1em 0',
  },
  name: { lineHeight: '0.8' },
  weighted: {
    fontWeight: 'bold',
    color: theme.mainColor,
  },
  smaller: {
    fontSize: '16px',
    color: theme.highlightColor,
  },
};

const Header = (props) => {
  const firstName = props.name.split(' ')[0];
  const lastName = props.name.split(' ')[1];

  return (
    <div className="panel text-center" style={styles.header}>
    <h2 style={styles.name}>
      {firstName}<span style={styles.weighted}>{lastName}</span> <br />
      <small style={styles.smaller}>{props.profession}</small>
    </h2>
    </div>
  );
};
Header.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
};

export default Header;
