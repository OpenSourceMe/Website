/**
 * config object
 {
   title: "resume",
   template: "Resume",
   content: {
     type: "folder",
     src: './resume'
   }
 }
 * should return

  ...some resume object I need to deduce


 */
function resumeHandler(config, urlPath) {
  return new Promise((resolve, reject) => {
    resolve({
      title: config.title,
      content: 'resume content',
    });
  });
}

export default resumeHandler;