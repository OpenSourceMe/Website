/* ********
  AUTHOR: breezykermo
  DATE: 27 February 2016 (Saturday)
  DESCRIPTION: handles blog content
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
// import posts from '../../data/posts';

const initialState = {
  posts: [
    {
      title: 'first post',
      date: 'today',
      content: 'this is the content of my first post',
    },
  ],
};

export const blog = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
