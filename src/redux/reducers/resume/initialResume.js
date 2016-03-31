/* ********
  AUTHOR: breezykermo
  DATE: 30 March 2016 (Wednesday)
  DESCRIPTION: Load initial resume from JSON.
  NOTES:
    TODO: put this in API, loaded asynchronously,
    for consistency's sake

******** */
// HACK
import jsonData from '../../../resume/data/resume';
const initialState = jsonData;
/** Initial Data */
/* eslint-disable no-unused-vars, arrow-body-style */
export const initialResume = (state = initialState, action) => {
/* eslint-enable no-unused-vars, arrow-body-style */
  return state;
};
