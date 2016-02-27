import { combineReducers } from 'redux';
import { blog } from './blog';
import { routerReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routerReducer,
  blog,
});
