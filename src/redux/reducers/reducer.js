import { combineReducers } from 'redux';
import { blog } from './blog';
import { pages } from './pages';
import { resumeReducer } from '../../resume/redux/reducers/reducer.js';
import { routerReducer } from 'react-router-redux';

console.log(resumeReducer);

export const reducer = combineReducers({
  routing: routerReducer,
  blog,
  pages,
  resume: resumeReducer,
});
