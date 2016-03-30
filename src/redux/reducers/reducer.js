import { combineReducers } from 'redux';
import { blog } from './blog';
import { pages } from './pages';
import { resume } from './resume';
import { routerReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routerReducer,
  blog,
  pages,
  resume,
});
