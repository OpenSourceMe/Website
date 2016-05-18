# Website (an OpenSourceMe engine)

'Website' is an engine to generate a personal website from a Github repository (see [the OpenSourceMe home page](https://github.com/OpenSourceMe/home) for more information on the project and its foundations). It is written in [NodeJS](https://nodejs.org/en/), uses [React](https://facebook.github.io/react/) for user interface, and [Redux](https://github.com/reactjs/redux) for state management. It uses a simple [Express](http://expressjs.com/) server to [isomorphically render](https://bensmithett.github.io/going-isomorphic-with-react) the application, pulling content from a Github repo.

## Run the site

Requires [Docker](https://docs.docker.com/engine/installation/) and [DockerCompose](https://docs.docker.com/compose/install/).
```bash
git clone https://github.com/OpenSourceMe/Website
cd Website
npm install
docker-compose up
```

## Develop the source 

```bash
git clone https://github.com/OpenSourceMe/Website
cd Website
npm install
npm run browser:dev
```

## Configuring the site with your own Github repo

All of the engine's configuration can be found in the *config* folder in the top level directory. To have the engine read from your own repo, go to *config/core.json*, and edit the first field, "githubPath" to your github path; the bit that comes after *https://github.com*. So, if your github repo is hosted at *https://github.com/breezykermo/myrepo*, change the value of "githubPath" to "breezykermo/myrepo".

## Structuring your repo

<span style="color:red;">To be written -- still deciding the exact structure, modes of config, etc.</span>
