/* ********
  AUTHOR: breezykermo
  DATE: 30 March 2016 (Wednesday)
  DESCRIPTION: Legacy routes from old Jekyll site.
  NOTES:

******** */
import React from 'react';
import { Redirect } from 'react-router';
/** Legacy Routes as React Component */
const legacyRoutes = (
  <div>
  <Redirect from='/portfolio' to='/page/portfolio' />
  <Redirect from='/about' to='/page/about' />
  <Redirect from='/music' to='/page/music' />
  <Redirect from='/:anyOther' to='page/notfound' />
  </div>
);
export default legacyRoutes;