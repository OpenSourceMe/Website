import React, {Component} from 'react';
import {connect} from 'react-redux';

//components
import SiteNav from '../components/SiteNav'; // NB: I cheat on this.
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export class Lay extends Component {
  render() {
    return (
      <div>
        <SiteNav/>
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state,
  };
}

const Layout = connect(mapStateToProps)(Lay);
export default Layout;