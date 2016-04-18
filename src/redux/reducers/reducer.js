import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { home } from './home';
import { pages } from './pages';
import { resumeTransform } from './transforms/resume';

const reducer = combineReducers({
  routing: routerReducer,
  home,
  pages,
  /** Template transforms can also have associated reducers */
  resumeTransform,
});

export default reducer;
