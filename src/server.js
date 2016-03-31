/* ********
  AUTHOR: breezykermo
  DATE: 30 March 2016 (Wednesday)
  DESCRIPTION: Serverside rendering of React application.
  NOTES:

******** */
import express from 'express';
import serialize from 'serialize-javascript';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './redux/store';
import routes from './routes';
/** Radium serverside */
import { StyleRoot } from 'radium';
/** API imports */
import api from './api';
import { createInitialState } from './api/utils';

const app = express();
/** 'api' folder handles '/api' routes */
app.use('/api', api);
/** Render public folder for static assets. */
app.use('/public', express.static(`${__dirname}./../public`));
/** React Component that renders the appropriate HTML,
     given an HTML content and a store */
const HTML = ({ content, store }) => (
  <html>
    <head>
      <title>lachlankermode.com</title>
      <link href='https://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" href="/public/bootstrap.min.css" />
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <div className="container">
          <div id="app" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <script dangerouslySetInnerHTML={
        { __html: `window.__initialState__=${serialize(store.getState())};` }
      }
      />
      <script src="/public/bundle.js" />
    </body>
  </html>
);
/** General handler for all routes. This handler will match React Router routes,
     render the app serverside, and then stringify it and send it to the client. */
app.use((req, res) => {
  /** Create store. Must use memory history without browser */
  const memoryHistory = createMemoryHistory(req.path);
  let store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);
  /** Match history */
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    /** Error in matching routes */
    if (error) {
      res.status(500).send(error.message);
    /** Specified Redirect */
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    /** Successful match, render app serverside */
    } else if (renderProps) {
      createInitialState().then(initialState => {
        store = configureStore(memoryHistory, initialState);
        const content = renderToString(
          <Provider store={store}>
            <StyleRoot radiumConfig={{ userAgent: req.headers['user-agent'] }}>
              <RouterContext {...renderProps} />
            </StyleRoot>
          </Provider>
        );
        res.send(`<!doctype html>\n${renderToString(<HTML content={content} store={store} />)}`);
      });
    }
  });
});

/* eslint-disable no-console */
app.listen(process.env.PORT, err => {
  if (err) {
    console.log('We\'ve got an error.');
    console.log(err);
    return;
  }
  console.log(`Listening on port ${process.env.PORT}`);
  console.log('-------');
  console.log(
    `Note that there are no Redux devTools with server-side rendering.
    If you need devtools, use 'npm run dev' instead.`
  );
});
/* eslint-enable no-console */
