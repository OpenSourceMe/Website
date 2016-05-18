import 'babel-polyfill';
import CONFIG from '../../config/core.json';
import templates from './templates';

/** URL to retrieve Website content */
const apiPath = `https://raw.githubusercontent.com/${CONFIG.githubPath}/${CONFIG.branch}/${CONFIG.websiteFolder}`;

/** Get array of template regexps, for getPageHandler */
const templateRegexes = Object.keys(templates)
  .map(key => templates[key].matches);

/**
 * Get handler function for a page from its Template specification.
 * @param  {Object} page - OpenSourceMe Object
 * @return {func}      - Appropriate handler function for object
 */
export function getPageHandler(page) {
  let handler = require(templates.default.handler).default;
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
 * Load data from Github repo, according to config. Each page in the config
 * file is handled by a handler responsible for its template. Templates claim
 * responsibility for pages via regular expressions, which can be found in
 * templates.js.
 * @param  {Object} config - Config object to specify where pages are, and which handlers to use.
 * @return {Promise}      - Resolves with data, rejects with error.
 */
export function loadData(config = CONFIG) {
  let pages;

  /** Get handlers for homePage, and for each other page */
  const homeHandler = getPageHandler(config.home);
  const pagesWithHandlers = config.pages
    .map(page => {
      const { title, content } = page;
      const handler = getPageHandler(page);
      return {
        title,
        content,
        handler,
      };
    });

  /** Handle pages with their handlers, as well as home */
  return Promise.all(
    pagesWithHandlers.map(page => page.handler(page, apiPath))
  )
    .then(handledPages => {
      pages = handledPages;
      return homeHandler(config.home, apiPath);
    })
    .then(homePage => ({
      home: homePage,
      pages,
    }));
}
