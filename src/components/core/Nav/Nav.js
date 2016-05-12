/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: site nav

******** */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Nav.styles';

const Nav = (props) => {
  const { pathways } = props;
  const { home } = pathways;
  delete pathways.home;
  const pages = Object.keys(pathways).map(key => pathways[key]);
  const pageHeaders = pages.map(page => (
    <Link to={`/page/${page.title}`} style={styles.page}>
      {page.title}
    </Link>
  ));

  const header = home.image ? (
    <img src={home.image.source} />
  ) : (
    <Link style={styles.navHead} to="/">{home.title}</Link>
  );

  return (
    <div style={styles.nav} className="row">
      <div className="col-md-6">
        {header}
      </div>
      <div style={styles.pagesContainer} className="col-md-6">
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
