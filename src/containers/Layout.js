/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: Standard Layout Container.
  NOTES:

******** */
import React from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav'; // NB: I cheat on this.
import Footer from '../components/Footer';
/**
 * Standard Layout.
 */
const Layout = ({ children }) => (
  <div>
    <SiteNav/>
    <div>
      {children}
    </div>
    <Footer />
  </div>
);

const LayoutContainer = connect(state => state)(Layout);
export default LayoutContainer;
