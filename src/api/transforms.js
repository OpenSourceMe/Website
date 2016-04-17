/* ********
  AUTHOR: breezykermo
  DATE: 17 April 2016 (Sunday)
  DESCRIPTION: Functions to retrieve data.
  NOTES:
    NB: very opinionated at the moment, should really modularize a
    lot more (can tell because some of these functions would be
    hard to test).

******** */
// import 'isomorphic-fetch';
import request from 'request-promise';
import CONFIG from './config.json';
import templates from './templates';

/** URL to retrieve Website content */
const apiPath = `https://raw.githubusercontent.com/${CONFIG.githubPath}/${CONFIG.branch}/${CONFIG.websiteFolder}`;
/** Get array of template regexps, for sourceDataFromConfig */
const templateRegexes = Object.keys(templates)
  .map(key => templates[key].matches);

/**
 * Get handler function for a page from its Template specification.
 * @param  {Object} page - OpenSourceMe Object
 * @return {func}      - Appropriate handler function for object
 */
export function getPageHandler(page) {
  let handler = require(templates.default.handler);
  for (let index = 0; index < templateRegexes.length; index++) {
    const regexp = templateRegexes[index];
    if (page.template.match(regexp)) {
      const handlerObj = templates[Object.keys(templates)[index]];
      handler = require(handlerObj.handler).default;
      break; // get handler of first matching regexp
    }
  }
  return handler;
}

/**
 * Load data from Github repo, according to config
 * @param  {Object} config - Config object to specify where pages are, and which handlers to use.
 * @return {Promise}      - Resolves with data, rejects with error.
 */
export function loadData(config = CONFIG) {
  return new Promise((resolve, reject) => {
    let home;
    let pages;
    console.log(apiPath)

    const homeHandler = getPageHandler(config.home);
    const pagesWithHandlers = config.pages
      .map(page => {
        const handler = getPageHandler(page);
        return {
          title: page.title,
          content: page.content,
          handler,
        };
      });

    const mdpages = config.pages
      .filter(page => page.content.type === 'file');
    /** Get top level files from Github dir, to transform as MD */
    Promise.all(mdpages.map(page => request(`${apiPath}/${page.content.src}`)))
      .then(rawPageContents => {
        const pagesWithMarkdown = rawPageContents
          .map((md, index) => ({
            title: mdpages[index].title,
            transform: 'md',
            content: md,
          }));
        pages = pagesWithMarkdown;
      })
      // .then(structure => {
      //   const contents = structure.map(item => ({
      //     type: item.type,
      //     url: item.git_url,
      //   }));
      //   markdownPages = contents.filter(f => f.type === 'file');
      //   /** Call api for directory contents */
      //   return Promise.all(
      //     contents
      //       .filter(f => f.type === 'dir')
      //       .map(f => fetch(f.url))
      //   );
      // })
      // .then(responses => Promise.all(responses.map(r => r.json())))
      // .then(dirs => {
      //   // TODO: there is a github rate limit.....
      //   console.log(
      //     dirs.map(dir = dir.tree)
      //   );
      // })
      // .then(() => homeHandler(config.home, apiPath))
      // .then(homePage => {
      //   home = homePage;
      //   return Promise.all(
      //     pagesWithHandlers.map(p => p.handler(p, apiPath))
      //   );
      // })
      .catch(err => {
        reject(err);
      });
  });
}
