require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';

/* ROUTER */
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/* REDUX */
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import SiteNav from './components/SiteNav';
import BlogPost from './components/Blog/Post';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppContainer}>
        <Route path='blog/:blogId' component={BlogPost} />
        <Route path='about' component={About} />
        <Route path='music' component={Music} />
        <Route path='portfolio' component={Portfolio} />
        <Route path='resume' component={Resume} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#app")
);
