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
import Blog from './components/Blog';
import BlogPost from './components/Blog/Post';
import Page from './containers/Page';

// cheats
import PortfolioPage from './containers/PortfolioPage';
import ResumePage from './containers/ResumePage';

import legacyRoutes from './legacy-routes';
/** Routes as a React component */
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Blog} />
    <Route path="/resume" component={ResumePage} />
    {legacyRoutes}
    <Route path="/blog/:postName" component={BlogPost} />
    <Route path="/page/portfolio" component={PortfolioPage} />
    <Route path="/page/:pageName" component={Page} />
  </Route>
);
export default routes;
