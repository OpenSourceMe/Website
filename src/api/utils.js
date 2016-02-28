const createBlogObject = (raw) => {

};


export const createInitialState = () => {
  return new Promise((resolve, reject) => {

    let posts;

    resolve({

      pages: {
        'about': {
          content: 'this is the new about content',
        },
        'music': {
          content: 'music content',
        },
      },
      blog: {
        posts: [
          {
            title: 'we welcome you',
            date: 'today',
            content: 'this is the content of my first post',
          },
        ],
      },

    })
  });
};