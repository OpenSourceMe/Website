/* ********
  AUTHOR: breezykermo
  DATE: 30 March 2016 (Wednesday)
  DESCRIPTION: Load initial resume from JSON.
  NOTES:
    TODO: put this in API, loaded asynchronously,
    for consistency's sake

******** */
const initialState = {
  details: {},
  header: {},
  sections: [],
  skills: {},
};
/** Initial Data */
export const initialResume = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
