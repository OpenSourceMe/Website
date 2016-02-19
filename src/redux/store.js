import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { reducer } from './reducers/reducer';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

const reduxRouterMiddleware = syncHistory(browserHistory);

const createFinalStore = compose(
  applyMiddleware(thunk, multi, reduxRouterMiddleware),
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
