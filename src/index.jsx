import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { browserHistory } from 'react-router';
import { StyleRoot } from 'radium';
import App from './App';

/** Hydrate state from server, isomorphic render */
let state = window.__initialState__ || undefined;
if (process.env.NODE_ENV === 'development') {
  /** For browser development (w/o express server), use false state */
  state = require('./config/development/falseState').default;
}

export const store = configureStore(browserHistory, state);

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot radiumConfig={{ userAgent: navigator.userAgent }}>
      <App />
    </StyleRoot>
  </Provider>,
  document.querySelector('#app')
);
