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
function markdownHandler(config, urlPath) {
  return new Promise((resolve, reject) => {
    resolve({
      title: config.title,
      content: 'Markdown content',
    });
  });
}

export default markdownHandler;