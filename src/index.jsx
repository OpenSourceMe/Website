import React from 'react';
import ReactDOM from 'react-dom';

/* REDUX */
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { browserHistory } from 'react-router';

/* RADIUM */
import { StyleRoot } from 'radium';

import App from './App';

const state = window.__initialState__ || undefined;
export const store = configureStore(browserHistory, state);

ReactDOM.render(
  <Provider store={store}>
    <StyleRoot radiumConfig={{ userAgent: navigator.userAgent }}>
      <App />
    </StyleRoot>
  </Provider>,
  document.querySelector('#app')
);
