import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './containers/Layout';
import Blog from './components/Blog';
import BlogPost from './components/Blog/Post';
import Page from './containers/Page';
import PortfolioPage from './containers/PortfolioPage';

import legacyRoutes from './legacy-routes';

// redirects for legacy
const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Blog} />
    {legacyRoutes}
    <Route path='/blog/:postName' component={BlogPost} />
    <Route path='/page/portfolio' component={PortfolioPage} />
    <Route path='/page/:pageName' component={Page} />
  </Route>
);

export default routes;