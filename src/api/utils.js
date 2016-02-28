import posts from './data/posts';
import about from './data/about';
import archive from './data/archive';
import music from './data/music';

export const createInitialState = () => {
  return new Promise((resolve, reject) => {

    resolve({
      pages: {
        about,
        archive,
        music,
      },
      blog: {
        posts,
      },
    })

  });
};