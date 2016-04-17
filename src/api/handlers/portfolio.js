/**
 * config object
 {
   title: "portfolio",
   template: "Portfolio",
   content: {
     type: "folder",
     src: "portfolio"
   }
 }
 * has file
 *   portfolio.json
 * and should return
  {

  }
 */
function portfolioHandler(config, urlPath) {
  return Promise.resolve({
    title: config.title,
    content: 'portfolio content',
  });
}

export default portfolioHandler;