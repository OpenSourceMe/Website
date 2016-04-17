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
function blogHandler(config, urlPath) {
  return new Promise((resolve, reject) => {
    resolve({
      title: config.title,
      content: 'blog content',
    });
  });
}

export default blogHandler;