/**
 * config object
 {
   title: "portfolio",
   template: "Portfolio",
   content: {
     type: "folder",
     src: "./portfolio"
   }
 }
 * should return

  ...some portfolio object I need to decide


 */
function portfolioHandler(config, urlPath) {
  return new Promise((resolve, reject) => {
    resolve({
      title: config.title,
      content: 'portfolio content',
    });
  });
}

export default portfolioHandler;