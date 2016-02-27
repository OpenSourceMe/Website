import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { reducer } from './reducers/reducer';

const routingMiddleware = routerMiddleware(browserHistory);

const createFinalStore = compose(
  applyMiddleware(thunk, multi, routingMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export function configureStore(initialState) {
  const store = createFinalStore(reducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) /* default if you use Babel 6+ */
    );
  }

  return store;
}
