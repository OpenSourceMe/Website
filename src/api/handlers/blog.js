/**
 * config object
 * {
      title: "about",
      template: "Markdown",
      content: {
        type: "file",
        src: "about.md"
      }
    }
 * should return
 * {
      title: 'about',
      content: '{{content in about.md}}'
   }
 */
import request from 'request-promise';

function piecesHandler(page, apiPath) {
  return request(`${apiPath}/${page.content.src}/index.json`)
    .then(json => {
      const contents = JSON.parse(json);
      /** TODO: load from listed files */
      return {
        title: page.title,
        transform: 'Pieces',
        content: 'Not yet loading from files',
      };
    });
}

export default piecesHandler;
