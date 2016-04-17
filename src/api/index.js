import 'babel-polyfill';

const express = require('express');
const router = express.Router();
import { createInitialState } from './utils';

import CONFIG from './config.json';
import templates from './templates';

/** URL to retrieve Website content */
const contentUrl = `${CONFIG.contentUrl}/${CONFIG.branch}/${CONFIG.githubFolder}/`;
/** Get array of template regexps, for sourceDataFromConfig */
const templateRegexes = Object.keys(templates)
  .map(key => templates[key].matches);

function loadFromLocalData(req, res) {
  createInitialState().then(state => {
    res.json(state);
  }).catch(error => {
    res.send(error);
  });
}

function getPageHandler(page) {
  let handler = require(templates.default.handler);
  templateRegexes.forEach((regexp, index) => {
    if (page.template.match(regexp)) {
      handler = require(templates[index].handler);
      return; // get handler of first matching regexp
    }
  });
  return handler;
}

async function loadData(config) {
  /** Get appropriate data for home and pages using specified handlers */
  const homeHandler = getPageHandler(config.home);
  const home = await homeHandler(config.home);
  const pages = await config.pages
    .map(page => {
      const handler = getPageHandler(page);
      return handler(page);
    });

  return {
    blog: {
      home, // should be a list of posts
    },
    pages: {
      ...pages, // should be key-value pairs, { name: content }
    },
  }
}

/** Route for initial state of site */
router.get('/initial-state', (req, res) => {
  return sourceDataFromConfig(CONFIG);
});

module.exports = router;
