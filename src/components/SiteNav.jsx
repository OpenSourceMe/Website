import React from 'react';
import {Link} from 'react-router';
import theme from '../theme';

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
  navButton: {
    ...theme.link,
    fontFamily: theme.fontFamily + '!important',
    padding: 15,
    margin: 15,
    border: '1px solid '+theme.secondaryColor,
    borderRadius: '0.8em',
    float: 'right',
  }
}

const SiteNav = (props) => {
  return (
    <div style={styles.nav}>
      <Link style={styles.navHead} to=''>Lachlan Kermode</Link>
      <Link style={styles.navButton} to='about'>about</Link>
      <Link style={styles.navButton} to='music'>music</Link>
      <Link style={styles.navButton} to='portfolio'>portfolio</Link>
      <Link style={styles.navButton} to='resume'>resume</Link>
    </div>
  );
};

export default SiteNav;