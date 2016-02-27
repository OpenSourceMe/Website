import React from 'react';

/* ROUTER */
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route } from 'react-router';

import Layout from './pages/Layout';
import BlogPost from './components/Blog/Post';
import About from './pages/About';
import Music from './pages/Music';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// nb: this is the one funky thing, to get around
// having to have routes in the same file as the provider
import { store } from './index';

const App = (props) => {

  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <div>
      <Router history={history}>
        <Route path='/' component={Layout}>
          <Route path='/blog/:postName' component={BlogPost} />
          <Route path='/about' component={About} />
          <Route path='/music' component={Music} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
        </Route>
      </Router>
    </div>
  );
};

export default App;