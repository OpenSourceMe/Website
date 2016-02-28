/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: site nav
  NOTES:
    greatly cheated.
    in the future this should take props through Layout, and
    include pages conditionally based on input data.

******** */
import React from 'react';
import {Link} from 'react-router';
import theme from '../theme';
import Radium from 'radium';

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
}

// NB: site nav is reversed bc i am a cheat with css.
const SiteNav = (props) => {
  return (
    <div style={styles.nav}>
      <Link style={styles.navHead} to=''>Lachlan Kermode</Link>
      <Link style={theme.navItem} to='/resume'>resume</Link>
      <Link style={theme.navItem} to='/page/portfolio'>portfolio</Link>
      <Link style={theme.navItem} to='/page/music'>music</Link>
      <Link style={theme.navItem} to='/page/about'>about</Link>
      <br />
    </div>
  );
};

export default Radium(SiteNav);