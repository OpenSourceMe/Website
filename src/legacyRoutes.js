import React from 'react';
import { Redirect } from 'react-router';

const legacyRoutes = (
  <div>
    <Redirect from="/portfolio" to="/page/portfolio" />
    <Redirect from="/about" to="/page/about" />
    <Redirect from="/music" to="/page/music" />
    <Redirect from="/resume" to="/page/resume" />
    <Redirect from="/:anyOther" to="page/notfound" />
  </div>
);
export default legacyRoutes;
