/* ********
  AUTHOR: breezykermo
  DATE: 27 February 2016 (Saturday)
  DESCRIPTION: handles blog content
  NOTES:
    using redux ducks; https://github.com/erikras/ducks-modular-redux

******** */
const createBlogObject = md => {
  // split at first paragraph break
  const halves = md.split(/(\n\n)(.+)?/);
  const details = JSON.parse(halves[0]);
  halves.shift();
  const rest = halves.join('\n\n');

  return {
    content: rest,
    ...details,
  };
}

import posts from '../../data/posts';

const initialState = {
  posts: posts.map(p => createBlogObject(p)),
};

export const blog = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
