/**
 * page
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
import request from 'request-promise';

function portfolioHandler(page, apiPath) {
  return request(`${apiPath}/${page.content.src}/portfolio.json`)
    .then(json => {
      const portfolio = JSON.parse(json);
      return {
        title: page.title,
        transform: 'Portfolio',
        content: portfolio.contents,
      };
    });
}

export default portfolioHandler;
