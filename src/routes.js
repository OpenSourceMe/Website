import React from 'react';

/* routing */
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/* redux */
import { configureStore } from './redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//components
import AppContainer from './index';
import Home from './pages/Home';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// create store
export const store = configureStore();

const routes = (props) => {
  return (
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path='/' component={AppContainer}>
        <Route path='home' component={Home} />
        <Route path='about' component={About} />
        <Route path='music' component={Music} />
        <Route path='portfolio' component={Portfolio} />
        <Route path='resume' component={Resume} />
      </Route>
    </Router>
  );
};

/* redux boiler */
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

export default routes;