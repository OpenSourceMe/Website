require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';

/* ROUTER */
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router';

import routes from './routes';

// nb: this is the one funky thing, to get around
// having to have routes in the same file as the provider
import { store } from './index';

const App = (props) => {

  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <div>
      <Router history={history} routes={routes}>
      </Router>
    </div>
  );
};

export default App;