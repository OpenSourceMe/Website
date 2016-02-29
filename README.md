# [lachlankermode.com](http://www.lachlankermode.com)
The full code for my website. At the moment this is a messy collection of React components that at some stage in the future might constitute a blog engine. I don't recommend using it at the moment, as it is just a collected mess of my mindspace.

## install
git clone this repository, then build with:
```
> $ npm install
```

If you want to run a solely client-side application with webpack-dev-server, uncomment the relevant lines in src/redux/reducers, and run:

```
> $ npm run dev
```

Open the web browser to `http://localhost:8080/`

For running the server side, run:

```
> $ npm start
```
NB: no development process for server-side yet, in active development.

## overview

This is a react-redux isomorphic/universal app, using an express server for server-side render. It was forked from a react-redux static boiler, and so it is still possible to run as a client-side static app, without server (but you can only enter from the root domain).

The project also uses ES2015/ES6/ES7 features, through various babel libraries. ES** is simply added features to the core javascript language. [For more information see here.](http://www.2ality.com/2015/11/tc39-process.html)

## react

The React part consists of the files found in the "src/components" folder.

[React docs can be found here.](https://facebook.github.io/react/docs/getting-started.html)

React specifies "view" logic for the app (in this case the login form, the title and the numbers).

The entry point for the app is index.jsx, which specifies how the whole app renders.
## redux

The Redux part consists of the files found in the "src/redux" folder.

[Redux docs can be found here.](http://redux.js.org/)

Redux specifies "state" logic for the app (what data is stored in the app). This is a useful abstraction because rather than worrying about a bunch of seperate interconnecting states of objects, all required state is stored in the "store" (which can be easily viewed with the Redux debug tools chrome extension).

## notes

Tests still to be written. Test suite runs, but haven't added any.
Linting in place, but not used at all.



