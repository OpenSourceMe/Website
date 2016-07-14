import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { browserHistory } from 'react-router';
import App from './App';

/** Hydrate state from server, isomorphic render */
const state = window.__initialState__ || undefined;
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'development') {
  /** For browser development (w/o express server), use false state */
  // state = require('./config/development/falseState').default;
// }

export const store = configureStore(browserHistory, state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
