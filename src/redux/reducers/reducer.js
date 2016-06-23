import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { home } from './home';
import { pages } from './pages';
import { footer } from './footer';

const reducer = combineReducers({
  routing: routerReducer,
  home,
  pages,
  footer,
  /** Extended components could also have associated reducers */
});

export default reducer;
