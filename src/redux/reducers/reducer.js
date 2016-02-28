import { combineReducers } from 'redux';
import { blog } from './blog';
import { pages } from './pages';
import { routerReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routerReducer,
  blog,
  pages,
});
