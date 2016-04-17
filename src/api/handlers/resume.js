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
import request from 'request-promise';

function resumeHandler(page, apiPath) {
  return request(`${apiPath}/${page.content.src}/resume.json`)
    .then(json => {
      const resume = JSON.parse(json);
      return {
        title: page.title,
        transform: 'Resume',
        content: resume,
      };
    });
}

export default resumeHandler;
