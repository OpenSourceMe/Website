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

function blogHandler(config, urlPath) {
  return Promise.resolve({ home: 'object' });
}

export default blogHandler;
