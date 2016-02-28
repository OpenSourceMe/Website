import React from 'react';
import { Redirect } from 'react-router';

const legacyRoutes = (
  <div>
  <Redirect from='/portfolio' to='/page/portfolio' />
  <Redirect from='/about' to='/page/about' />
  <Redirect from='/music' to='/page/music' />
  </div>
);

export default legacyRoutes;