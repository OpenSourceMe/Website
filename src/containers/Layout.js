import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoadingBar from '../components/core/LoadingBar';
import Nav from '../components/core/Nav';
import Footer from '../components/core/Footer';
import components from '../components';
import { createNavPathways } from '../util/react';

const Layout = props => (
  <div>
    { !(props.home && Array.isArray(props.home.content) && props.home.content.length > 0) ? (
      <LoadingBar />
    ) : (
    <div>
      <Nav pathways={createNavPathways(components, props.home, props.pages)}/>
      <div>
        {props.children}
      </div>
      <Footer {...props.footer} />
    </div>)}
  </div>
);
Layout.propTypes = {
  home: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  footer: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export default connect(state => ({
  home: state.home,
  pages: state.pages,
  footer: state.footer,
}))(Layout);
