import { combineReducers } from 'redux';
import { title } from './title';
import { server } from './server';
import { routeReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routeReducer,
  title,
  server,
});
