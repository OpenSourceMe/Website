import { combineReducers } from 'redux';
import { numbs } from './numbs';
import { server } from './server';

export const reducer = combineReducers({
  numbs,
  server,
});
