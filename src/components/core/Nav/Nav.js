import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';
import theme from '../../../config/theme';
import styles from './Nav.styles';

const Nav = (props) => {
  const { pathways } = props;
  const { home } = pathways;
  delete pathways.home;

  const pages = Object.keys(pathways).map(key => pathways[key]);
  const pageHeaders = pages.map(page => (
    <div key={page.title} className="col-sm-3">
      <Link to={`/page/${page.title}`} className={css(theme.header, theme.link, styles.page)}>
        {page.title}
      </Link>
    </div>
  ));

  const header = home.image ? (
    <img src={home.image.source} />
  ) : (
    <Link className={css(theme.header, theme.link, styles.navHead)} to="/">
      {home.title}
    </Link>
  );

  return (
    <div className={`row ${css(styles.nav)}`}>
      <div className="col-md-6">
        {header}
      </div>
      <div className={`col-md-6 ${css(styles.pagesContainer)}`}>
        <div className={`row ${css(styles.pagesRow)}`}>
          {pageHeaders}
        </div>
      </div>
      <br />
    </div>
  );
};
Nav.propTypes = {
  pathways: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    transform: PropTypes.string.isRequired,
    component: PropTypes.func,
  })).isRequired,
};

export default Nav;
