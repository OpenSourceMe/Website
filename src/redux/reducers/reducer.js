import { combineReducers } from 'redux';
import { title } from './title';
import { routerReducer } from 'react-router-redux';

export const reducer = combineReducers({
  routing: routerReducer,
  title,
});
