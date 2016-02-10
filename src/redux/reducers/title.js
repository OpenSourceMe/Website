/* ********
  AUTHOR: breezykermo
  DATE: 10 February 2016 (Wednesday)
  DESCRIPTION: reducer for title component
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
export const UPDATE_TITLE = 'title/UPDATE_TITLE';
export const updateTitle = (title) => {
  return({
    type: UPDATE_TITLE,
    title,
  });
};

export const title = (state = { title: 'welcome', }, action) => {
  switch(action.type) {

  case UPDATE_TITLE:
    return {
      title: action.title,
    };

  default:
    return state;
  }

}
