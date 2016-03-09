/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: handles other pages
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
import about from '../../api/data/about';
import music from '../../api/data/music';

let initialState = {};
if (process.env.NODE_ENV === 'development') {
  initialState = {
    about,
    music,
  };
};

export const pages = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
