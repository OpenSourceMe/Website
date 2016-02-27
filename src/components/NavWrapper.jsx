import React from 'react';
import {Link} from 'react-router';

const styles = {
  nav: {
    padding: 20,
    margin: 10,
  },
  navHead: {
    padding: 15,
    margin: 15,
    float: 'left',
  },
  navButton: {
    padding: 15,
    margin: 15,
    border: '1px solid black',
    textDecoration: 'none',
    float: 'right',
  }
}

const NavWrapper = (props) => {
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

export default NavWrapper;