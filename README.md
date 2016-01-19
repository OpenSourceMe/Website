# React-Redux-Boilerplate
Boiler plate for a react redux web app.

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

Public simply contains the index.html file, which has no added css (it is possible to do all css inline with React) and no extra html elements except for a ```<title>``` tag, a link to the bundle.js (which will be created when you build with the webpack command), and a div for the React code to be rendered into (```<div id="app"></div>```).

## React

The React part consists of the files found in the "src/components" folder.




