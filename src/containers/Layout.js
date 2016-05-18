import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/core/Nav';
import Footer from '../components/core/Footer';
import components from '../components';
import { createNavPathways } from '../util/react';

const Layout = props => (
  <div>
    <Nav pathways={createNavPathways(components, props.home, props.pages)}/>
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
);
Layout.propTypes = {
  home: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired,
  children: PropTypes.any,
};

const LayoutContainer = connect(state => ({
  home: state.home,
  pages: state.pages,
}))(Layout);
export default LayoutContainer;
