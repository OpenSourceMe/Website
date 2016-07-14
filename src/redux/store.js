import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducers/reducer';
/**
 * Configure Redux store.
 * @param  {History} history      History to use for React-Redux (different for server rendering).
 * @param  {Object} initialState The initial state of the store (optional).
 * @return {Store}              Redux store.
 */
export function configureStore(history, initialState) {
  const routingMiddleware = routerMiddleware(history);
  /** DevTools only during development */
  let devTools = f => f;
  if (process.env.NODE_ENV === 'development') {
    devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
  }

  const createFinalStore = compose(
    applyMiddleware(thunk, routingMiddleware),
    devTools
  )(createStore);
  const store = createFinalStore(reducer, initialState);

  return store;
}
