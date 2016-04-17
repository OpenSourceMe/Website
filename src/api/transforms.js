import CONFIG from './config.json';
import templates from './templates';

/** URL to retrieve Website content */
const contentUrl = `${CONFIG.contentUrl}/${CONFIG.branch}/${CONFIG.githubFolder}/`;
/** Get array of template regexps, for sourceDataFromConfig */
const templateRegexes = Object.keys(templates)
  .map(key => templates[key].matches);

/**
 * Get handler function for a page from its Template specification.
 * @param  {Object} page - OpenSourceMe Object
 * @return {func}      - Appropriate handler function for object
 */
function getPageHandler(page) {
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

    homeHandler(config.home, contentUrl)
      .then(homePage => {
        home = homePage;
        return Promise.all(
          pagesWithHandlers.map(p => p.handler(p, contentUrl))
        );
      })
      .then(otherPages => {
        pages = otherPages;
        const data = {
          home,
          pages,
        };
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
