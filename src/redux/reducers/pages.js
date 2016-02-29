/* ********
  AUTHOR: breezykermo
  DATE: 28 February 2016 (Sunday)
  DESCRIPTION: handles other pages
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
// NB: only need this for client side testing, without loading data from server.
// import about from '../../api/data/about';
// import music from '../../api/data/music';

const initialState = {
  // about,
  // music,
};

export const pages = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
