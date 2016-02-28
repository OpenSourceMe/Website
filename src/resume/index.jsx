/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: starting point for application
  NOTES:
    global css imported after bootstrap (as a shortcut)

******** */
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require('./global.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import A4ResumeContainer from './components/A4Resume';

ReactDOM.render(
  <Provider store={configureStore()}>
    <A4ResumeContainer />
  </Provider>,
  document.querySelector("#app")
);
