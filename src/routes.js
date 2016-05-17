import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './containers/Layout';
import Pieces from './components/core/Pieces';
import RenderPiece from './containers/RenderPiece';
import RenderPage from './containers/RenderPage';
import legacyRoutes from './legacyRoutes';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Pieces} />
    {legacyRoutes}
    <Route path="/pieces/:pieceName" component={RenderPiece} />
    <Route path="/page/:pageName" component={RenderPage} />
  </Route>
);
export default routes;
