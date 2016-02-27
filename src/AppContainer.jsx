import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

require("../node_modules/bootstrap/dist/css/bootstrap.min.css")

//components
import SiteNav from './components/SiteNav';
import Blog from './components/Blog';
import Footer from './components/Footer';

const styles = {
  nav: {
    backgroundColor: 'transparent',
  },
};
/* create container as stateless function to indicate pure component */
export class App extends Component {
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

function mapDispatchToProps(dispatch) {
  const actions = [];
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;