/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: redux store
  NOTES:
    redux-thunk for async actions
    redux-multi allows the dispatch of multiple actions to the store at once
    chrome extension redux dev tools
    hot module replacement

******** */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { reducer } from './reducers/reducer';

import { Map } from 'immutable';
import * as headerActions from './reducers/header';
import * as detailsActions from './reducers/details';
import * as skillsActions from './reducers/skills';
import * as sectionsActions from './reducers/sections';

const createFinalStore = compose(
	applyMiddleware(thunk, multi),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export function configureStore(initialState) {
	const store = createFinalStore(reducer, initialState);

	// // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
	if (module.hot) {
	  module.hot.accept('../reducers', () =>
	    store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
	  );
	}

	return store;
}
