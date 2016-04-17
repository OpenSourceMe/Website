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
async function markdownHandler(config, urlPath) {

}

export default markdownHandler;