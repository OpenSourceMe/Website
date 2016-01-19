# React-Redux-Boilerplate
Boiler plate for a react redux web app.

[What it looks like at a glance.](https://i.imgur.com/NgP8oL3.png)

## install

git clone this repository, then build with:
```
> $ npm install
```

This will create the node_modules file with the needed dependencies.

## run

You can simply run webpack build using this command: 

```
> $ npm run build
```

If you want to run with webpack-dev-server simply run this command: 

```
> $ npm run dev
```

Open the web browser to `http://localhost:8080/`

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

Running test suite does not work. Sorry.



