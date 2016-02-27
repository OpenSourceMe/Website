require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';

/* ROUTER */
import { Router, Route, Link, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { syncHistoryWithStore } from 'react-router-redux';

/* REDUX */
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import SiteNav from './components/SiteNav';
import Title from './components/Title';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// styles
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
          ? <Home />
          : <div>{this.props.children}</div>}
        </div>
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

const store = configureStore();
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path='/' component={AppContainer}>
        <Route path='home' component={Home} />
        <Route path='about' component={About} />
        <Route path='music' component={Music} />
        <Route path='portfolio' component={Portfolio} />
        <Route path='resume' component={Resume} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#app")
);
