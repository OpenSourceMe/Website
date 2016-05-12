/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: site nav

******** */
import React, { PropTypes } from 'react';
import { Style } from 'radium';
import { Link } from 'react-router';
import styles from './Nav.styles';

const Nav = (props) => {
  const { pathways } = props;
  const { home } = pathways;
  delete pathways.home;
  const pages = Object.keys(pathways).map(key => pathways[key]);
  const pageHeaders = pages.map(page => (
    <Link to={`/page/${page.title}`} style={styles.page}>
      <h1>{page.title}</h1>
    </Link>
  ));

  console.log(pages)
  return (
    <div style={styles.nav}>
      <Link style={styles.navHead} to="/">{home.title}</Link>
      <div style={styles.pagesContainer}>
        {pageHeaders}
      </div>
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
