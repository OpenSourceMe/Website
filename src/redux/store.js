import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { routerMiddleware } from 'react-router-redux';
import { reducer } from './reducers/reducer';

export function configureStore(history, initialState) {

  const routingMiddleware = routerMiddleware(history);

  // only devTools if build process in browser
  // TODO: make production env.
  let devTools = f => f;
  if (false) {
    devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
  }

  const createFinalStore = compose(
    applyMiddleware(thunk, multi, routingMiddleware),
    devTools
  )(createStore);

  const store = createFinalStore(reducer, initialState);

  // // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers')) /* default if you use Babel 6+ */
  //   );
  // }

  return store;
}
