/**
 * Takes a home component and an array of pages,
 * and returns appropriate props for the Nav
 * component.
 * @param  {Object} templates - Available templates.
 * @param  {Object} home - Home component details.
 * @param  {array} pages - Array of page components.
 * @return {Object} - Appropriate props for Nav.
 */
export const createNavPathways = (templates, home, pages) => {
  const homeComponent = {
    title: home.title,
    transform: home.transform,
    component: templates[home.transform],
  };
  const pagePairs = {};
  pages.forEach(page => {
    pagePairs[page.title] = {
      title: page.title,
      transform: page.transform,
      component: templates[page.transform],
    };
  });
  return {
    home: homeComponent,
    ...pagePairs,
  };
};
