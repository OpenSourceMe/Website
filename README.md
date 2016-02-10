# React-Redux-Boilerplate
Boiler plate for a react redux web app, bootstrap classes available.

## install

git clone this repository, then build with:
```
> $ npm install
```

If you want to run with webpack-dev-server simply run this command:

```
> $ npm run dev
```

Open the web browser to `http://localhost:8080/`

For building static files, run:

```
> $ npm run build
```

## overview

This is a simple react-redux app containing some of the boilerplate needed for a larger-scale application.

Public contains the index.html file, which has no added css (it is possible to do all css inline with React) and no extra html elements except for a ```<title>``` tag, a link to the bundle.js (which will be created when you build with the webpack command), and a div for the React code to be rendered into (```<div id="app"></div>```).

The project also uses ES2015/ES6/ES7 features, through various babel libraries. ES** is simply added features to the core javascript language. [For more information see here.](http://www.2ality.com/2015/11/tc39-process.html)

## React

The React part consists of the files found in the "src/components" folder.

[React docs can be found here.](https://facebook.github.io/react/docs/getting-started.html)

React specifies "view" logic for the app (in this case the login form, the title and the numbers).

The entry point for the app is index.jsx, which specifies how the whole app renders.
## Redux

The Redux part consists of the files found in the "src/redux" folder.

[Redux docs can be found here.](http://redux.js.org/)

Redux specifies "state" logic for the app (what data is stored in the app). This is a useful abstraction because rather than worrying about a bunch of seperate interconnecting states of objects, all required state is stored in the "store" (which can be easily viewed with the Redux debug tools chrome extension).

## Notes

Tests still to be written. Test suite runs, but haven't added any.



