import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { configureStore } from './src/redux/store'
import routes from './src/routes'

// Radium server side
import { StyleRoot } from 'radium';
// https://github.com/FormidableLabs/radium/tree/master/docs/api#configmatchmedia
// import Radium from 'radium';
// import matchMediaMock from 'match-media-mock';
// Radium.config.setMatchMedia(matchMediaMock);

// // TODO: get screen size from request
// matchMediaMock.setConfig({
//   type: 'screen',
//   width: '991px',
//   height: '1240px',
// });
//

const app = express()
app.use('/public', express.static(__dirname + '/public'))

// nb: this is a React stateless component, clever
const HTML = ({ content, store }) => (
  <html>
    <head>
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
      store = configureStore(memoryHistory, store.getState() )
      const content = renderToString(
        <Provider store={store}>
          <StyleRoot radiumConfig={{userAgent: req.headers['user-agent']}}>
            <RouterContext {...renderProps} />
          </StyleRoot>
        </Provider>
      );
      res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store} />));
    }
  })

})


app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening on http://127.0.0.1:3000')
})
