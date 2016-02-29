import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
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

// nb: this is a React stateless component, clever
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

  // create memoryHistory (can't use hash or browser bc there is no window)
  const memoryHistory = createMemoryHistory(req.path)
  // configure store function adapted to take in a history (makes more sense)
  let store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  /* react router match history */
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      /* i don't need to fetch async data, but i would do it here. */
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


app.listen(3000, function (err) {
  if (err) {
    console.log('we\'ve got an error.')
    console.log(err);
    return;
  }
  console.log('listening on port 3000')
})