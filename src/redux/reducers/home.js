let initialState = {};
if (process.env.NODE_ENV === 'development') {
  initialState = {
    title: 'My OpenSourceMe',
    transform: 'Pieces',
    content: [
      {
        title: 'Blog Piece 1',
        date: '01.01.2016',
        content: `This is the outstanding content of my first blog. This
         content also uses *markdown*, but there is no HTML support.`,
      },
      {
        title: 'Blog Piece 2',
        date: '02.01.2016',
        content: `This is the outstanding content of my first blog. This
         content also uses *markdown*, but there is no HTML support.`,
      },
    ],
  };
}

export const home = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
