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
import Page from './containers/Page';

// cheats
import Portfolio from './components/extended/Portfolio';
import ResumePage from './containers/ResumePage';

import legacyRoutes from './legacy-routes';
/** Routes as a React component */
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Pieces} />
    <Route path="/resume" component={ResumePage} />
    {legacyRoutes}
    <Route path="/blog/:postName" component={Piece} />
    <Route path="/page/portfolio" component={Portfolio} />
    <Route path="/page/:pageName" component={Page} />
  </Route>
);
export default routes;
