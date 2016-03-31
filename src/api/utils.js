import posts from './data/posts';
import about from './data/about';
import music from './data/music';

export const createInitialState = () => (
  new Promise((resolve) => {
    resolve({
      pages: {
        about,
        music,
      },
      blog: {
        posts,
      },
    });
  })
);
