/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: handles other pages
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
// import posts from '../../data/posts';

const initialState = {
  'about': {
    content: 'about content',
  },
  'music': {
    content: 'music content',
  },
};

export const pages = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
