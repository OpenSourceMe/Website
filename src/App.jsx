import React from 'react';

/* ROUTER */
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router } from 'react-router';

import routes from './routes';

import { store } from './index';

const App = () => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history} routes={routes} />
  );
};

export default App;
