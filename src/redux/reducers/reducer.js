import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { home } from './home';
import { pages } from './pages';

const reducer = combineReducers({
  routing: routerReducer,
  home,
  pages,
  /** Custom components can also have associated reducers */
});

export default reducer;
