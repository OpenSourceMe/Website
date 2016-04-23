/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: site nav
  NOTES:
    greatly cheated.
    in the future this should take props through Layout, and
    include pages conditionally based on input data.
    TODO how???

******** */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import theme from '../../../theme';

const styles = {
  nav: {
    padding: 20,
    margin: 10,
    height: '100px',
    width: '100%',
  },
  navHead: {
    ...theme.header,
    ...theme.link,
    padding: 15,
    margin: 15,
    float: 'left',
  },
};
/**
 * <Link style={theme.navItem} to="/resume">resume</Link>
      <Link style={theme.navItem} to="/page/portfolio">portfolio</Link>
      <Link style={theme.navItem} to="/page/music">music</Link>
      <Link style={theme.navItem} to="/page/about">about</Link>
 */
// NB: site nav is reversed bc i am a cheat with css.
const Nav = (props) => {
  const { pathways } = props;
  const { home } = pathways;
  delete pathways.home;
  const pages = Object.keys(pathways).map(key => pathways[key]);
  return (
    <div style={styles.nav}>
      <Link style={styles.navHead} to="/">{home.title}</Link>
      {pages.forEach((page, index) => {
        console.log(page);
        console.log(index);
      })}
      <br />
    </div>
  );
};
Nav.propTypes = {
  pathways: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    transform: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
  })).isRequired,
};

export default Nav;
