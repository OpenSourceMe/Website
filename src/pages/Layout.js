require("../../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, {Component} from 'react';
import {connect} from 'react-redux';

//components
import SiteNav from '../components/SiteNav';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export class Lay extends Component {
  render() {
    return (
      <div>
        <div>
          <SiteNav/>
        </div>
        <div>
          {this.props.routing.locationBeforeTransitions.pathname === '/'
          ? <Blog posts={this.props.blog.posts} />
          : <div>{this.props.children}</div>}
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