import React from 'react';
import ReactDOM from 'react-dom';

/* ROUTER */
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/* REDUX */
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';

import AppContainer from './AppContainer';
import BlogPost from './components/Blog/Post';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppContainer}>
        <Route path='/blog/:postName' component={BlogPost} />
        <Route path='/about' component={About} />
        <Route path='/music' component={Music} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#app")
);
