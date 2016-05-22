# Website (an OpenSourceMe engine)

'Website' is an engine to generate a personal website from a Github repository (see [the OpenSourceMe home page](https://github.com/OpenSourceMe/home) for more information on the project and its foundations). It is written in [NodeJS](https://nodejs.org/en/), uses [React](https://facebook.github.io/react/) for user interface, and [Redux](https://github.com/reactjs/redux) for state management. It uses a simple [Express](http://expressjs.com/) server to [isomorphically render](https://bensmithett.github.io/going-isomorphic-with-react) the application, pulling content from a Github repo. In addition to this repo, there is also [an article](http://www.lachlankermode.com/pieces/i-would-like-to-be-an-open-source-software) that explains some of the reasons this engine exists.

## React & Redux
[React](https://facebook.github.io/react/) is a JavaScript library for building view interfaces. A view is built from one or more *components*, which are reusable building blocks that have some given functionality. React can be used in a range of different ways, but this project uses it with [functional programming](http://blog.jenkster.com/2015/12/what-is-functional-programming.html) ideas, via a popular state management paradigm called [Redux](http://redux.js.org/). Very simply put, Redux allows you to hold the state of an application outside of its implementation logic in something called a *store*. Every time a user interacts with your application, the application dispatchs *actions* to the *store*, modifying the application state accordingly, which in turn re-renders the appropriate React component to reflect the changes. If this made no sense to you, don't worry -- Redux was mad tough for me to wrap my head around initially. The [redux docs](http://redux.js.org/) are a great resource, as they are very well written and outline not only what Redux is, but why and how it can be used successfully.

NB: Redux is very much overkill for this repo currently, as there are no *actions* that update the state. It was included in the repo because I boiled the project down from a larger boilerplate that included Redux, and I am leaving it in as a form of future-proofing: as functionality increases, Redux is a very familiar paradigm for me to work with. This is probably a bad reason to keep it in, I admit. But the world keeps turning.

## Express & Isomorphic rendering
[Express](http://expressjs.com/) is a light-weight and minimalist JavaScript web framework that runs on NodeJS. Isomorphic rendering (and I'll get to what this is in a second) is necessary for this website because it is an SPA, or a Single Page Application. In a traditional website, using HTML, CSS and JS, each route that the user visits corresponds to a certain HTML document. For example, www.lachlankermode.com/about might direct to an *about.html*, and www.lachlankermode.com/portfolio might direct to a *portfolio.html*. In an SPA, there is only one HTML document, *index.html*, and routing is handled in JavaScript. This can be much more efficient in SPAs, as often only a small section of the page is changing when the user directs to a new route. Handling routing in JavaScript means that the entire page does not have to re-render on every route change.

JavaScript-handled routing contains routing information in the application state--in this application's case, the Redux state--not in corresponding HTML documents like a traditional static webpage. If the user is always opening the website at its default route, e.g. www.lachlankermode.com, we can just give the user the application with its default/initial state, and then subsequent route changes will be handled in the browser by the JavaScript that is served with that file. However, if the user visits our domain at a non-default route, e..g www.lachlankermode/about, we have a problem. We cannot just serve the user the application files with the default state, otherwise it will simply open to the 'home' page, which is not we want.

This is where *isomorphic rendering* comes in. When a user visits a non-default route, we can render the application with JavaScript on the server. What this means is that we can saturate the state of the application with extra, non-default information before sending it to the client browser: for example, with non-default routing information. When the user visits a non-default route, e.g. www.lachlankermode.com/about, we can send them our application with a state that corresponds to what they expect; the application at its *about* route.

Isomorphic rendering is also what allows this engine to pull its content from Github. Before serving files to the browser, it makes a request to Github and retrieves the information in the files at a Github repo, e.g. www.github.com/breezykermo/LachieKermode, and then saturates the application state with this information. It is in this way that the website's content directly reflects the Github content--if the files change on Github, the changes will be reflected in the application state before each render, which in turn is reflected in the website.

For more information on isomorphic rendering with react, see [this article](https://bensmithett.github.io/going-isomorphic-with-react).

## Docker & Docker-Compose

Docker is a software for containerization that provides a lot of the same benefits that virtual machines do. Docker is a complex and multi-faceted beast, but in the context of this application it provides one very simple service: the ability to run the application with nothing but Docker installed. This is because Docker allows you to create things called *images* that package all of the required installations and code, which can then be spun up into things called *containers*: self-contained processes that can run the application code, which we can then reference in order to actually use the application. At the moment, Docker runs natively on Ubuntu and Linux. You can also run it on Mac and Windows, but you have to jump through a couple of extra hoops. [Read installation docs here.](https://docs.docker.com/engine/installation/)

Depending on your current familiarity with Docker, it may be easier to simply run the application using Node. Below are the steps to run the application, respectively using Docker and Node.

## Run the site with Docker

Requires [Git](https://git-scm.com/downloads), [Docker](https://docs.docker.com/engine/installation/) and [DockerCompose](https://docs.docker.com/compose/install/).
```bash
git clone https://github.com/OpenSourceMe/Website
cd Website
npm install
docker-compose up
```

## Run the site with Node

Requires [Git](https://git-scm.com/downloads) and [Node V4](https://nodejs.org/en/download/).
```bash
git clone https://github.com/OpenSourceMe/Website
cd Website
npm install
npm start
```

## Develop the source 

```bash
git clone https://github.com/OpenSourceMe/Website
cd Website
npm install
npm run browser:dev
```

## Configuring the site with your own Github repo

 - Through Docker
  - Edit *docker-compose.yml, and change the environment variables. SITE_TITLE will be displayed in the top left corner of your site. GITHUB_PATH is the bit that comes after *https://github.com* in your OpenSourceMe repo. So, if your github repo is hosted at *https://github.com/breezykermo/myrepo*, change the value of "githubPath" to "breezykermo/myrepo". WEBSITE_FOLDER is the folder within your OpenSourceMe repo that contains your structured *Website* repo.

 - Through Node
  - All of the engine's configuration can be found in the *config* folder in the top level directory. To have the engine read from your own repo, go to *config/core.json*, and edit the first field, "githubPath" to your github path; the bit that comes after *https://github.com*. So, if your github repo is hosted at *https://github.com/breezykermo/myrepo*, change the value of "githubPath" to "breezykermo/myrepo".

## Structuring your repo

<span style="color:red;">To be written -- still deciding the exact structure, modes of config, etc.</span>
