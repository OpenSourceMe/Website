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
import request from 'request';

function blogHandler(config, urlPath) {
  return new Promise((resolve, reject) => {
    request(`${urlPath}/${config.content.src}`, (err, res, body) => {
      if (err) reject(err);
      resolve({
        title: config.title,
        template: config.template,
        content: body,
      });
    });
  });
}

export default blogHandler;
