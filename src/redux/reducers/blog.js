/* ********
  AUTHOR: breezykermo
  DATE: 27 February 2016 (Saturday)
  DESCRIPTION: handles blog content
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
// NB: only need this for client side testing, without loading data from server.
import posts from '../../api/data/posts';

let initialState = {};
if (process.env.NODE_ENV === 'development') {
  initialState = {
    posts,
  };
};

export const blog = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
