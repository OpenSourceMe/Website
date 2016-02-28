import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './containers/Layout';
import Blog from './components/Blog';
import BlogPost from './components/Blog/Post';
import Page from './containers/Page';

// cheats
import PortfolioPage from './containers/PortfolioPage';
import ResumePage from './containers/ResumePage';

import legacyRoutes from './legacy-routes';

// redirects for legacy
// NB: many cheats in this file, need to fix for proper blog engine
const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Blog} />
    <Route path='/resume' component={ResumePage} />
    {legacyRoutes}
    <Route path='/blog/:postName' component={BlogPost} />
    <Route path='/page/portfolio' component={PortfolioPage} />
    <Route path='/page/:pageName' component={Page} />
  </Route>
);

export default routes;