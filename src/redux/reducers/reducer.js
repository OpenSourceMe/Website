import { combineReducers } from 'redux';
import { title } from './title';
import { server } from './server';
import { routerReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routerReducer,
  title,
  server,
});
