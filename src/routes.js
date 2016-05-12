/* ********
  AUTHOR: breezykermo
  DATE: 30 March 2016 (Wednesday)
  DESCRIPTION: Routes as React Component
  NOTES:

******** */
import React from 'react';
import { IndexRoute, Route } from 'react-router';
/** Components */
import Layout from './containers/Layout';
import Pieces from './components/core/Pieces';
import Piece from './components/core/Pieces/Post';

const FindPiece = () => {

};

const FindComponent = () => {

};

import legacyRoutes from './legacy-routes';
/** Routes as a React component */
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Pieces} />
    {legacyRoutes}
    <Route path="/blog/:postName" component={FindPiece} />
    <Route path="/page/:pageName" component={FindComponent} />
  </Route>
);
export default routes;
