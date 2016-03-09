import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, browserHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { configureStore } from './redux/store'
import routes from './routes'
// Radium server side
import { StyleRoot } from 'radium';
// api
import api from './api';
import { createInitialState } from './api/utils';

const app = express()

app.use('/api', api);
app.use('/public', express.static(__dirname+'./../public'))

const HTML = ({ content, store }) => (
  <html>
    <head>
      <title>lachlankermode.com</title>
      <link rel='stylesheet' type='text/css' href='/public/styles.css' />
    </head>
    <body>
      <div className="container">
          <div id="app" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src='/public/bundle.js' />
    </body>
  </html>
)

app.use(function (req, res) {
  // create store (can't use hash or browser history bc there is no window)
  const memoryHistory = createMemoryHistory(req.path)
  let store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)
  /* react router match history */
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      createInitialState().then(initialState => {
        store = configureStore(memoryHistory, initialState)
        const content = renderToString(
          <Provider store={store}>
            <StyleRoot radiumConfig={{userAgent: req.headers['user-agent']}}>
              <RouterContext {...renderProps} />
            </StyleRoot>
          </Provider>
        );
        res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store} />));
      })
    }
  })
})

app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log('we\'ve got an error.')
    console.log(err);
    return;
  }
  console.log('Listening on port '+process.env.PORT)
  console.log('-------')
  console.log('Note that there are no Redux devTools with server-side rendering. Use `npm run dev` instead.')
})
