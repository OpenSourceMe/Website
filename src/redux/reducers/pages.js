let initialState = {};
if (process.env.NODE_ENV === 'development') {
  initialState = [
    {
      title: 'Page 1',
      transform: 'md',
      content: `This is the page content, in *markdown*, with
      <span style="color:blue;">inline html</span> supported.`,
    },
    {
      title: 'Page 2',
      transform: 'md',
      content: `This is the page content, in *markdown*, with
      <span style="color:blue;">inline html</span> supported.`,
    },
  ];
}

export const pages = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
