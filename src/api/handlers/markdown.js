/**
 * page
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
      transform: 'md',
      content: '{{content in about.md}}'
   }
 */
import request from 'request-promise';

function markdownHandler(page, apiPath) {
  return request(`${apiPath}/${page.content.src}`)
    .then(md => ({
      title: page.title,
      transform: 'md',
      content: md,
    }));
}

export default markdownHandler;
