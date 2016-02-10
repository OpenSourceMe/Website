import { combineReducers } from 'redux';
import { title } from './title';
import { server } from './server';

export const reducer = combineReducers({
  title,
  server,
});
