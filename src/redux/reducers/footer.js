let initialState = {};
if (process.env.NODE_ENV === 'development') {
  initialState = {
    left: 'Thanks for using this software!',
    center: '<a href="https://github.com/OpenSourceMe/Website">Check out the source on Github</a>',
    right: '🙏🙏🙏',
  };
}

export const footer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
