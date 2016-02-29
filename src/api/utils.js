import posts from './data/posts';
import about from './data/about';
import music from './data/music';

export const createInitialState = () => {
  return new Promise((resolve, reject) => {
    resolve({
      pages: {
        about,
        music,
      },
      blog: {
        posts,
      },
    })

  });
};