/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: details reducer
  NOTES:

******** */
import { createEmpty } from './utils.js'

export const UPDATE_DETAIL = 'details/UPDATE_DETAIL';
export const updateDetail = (key, value) => {
  return({
    type: UPDATE_DETAIL,
    key,
    value,
  });
};

export const DELETE_DETAIL = 'details/DELETE_DETAIL';
export const deleteDetail = (key) => {
  return({
    type: DELETE_DETAIL,
    key,
  });
};

export const CLEAR_DETAILS = 'details/CLEAR_DETAILS';
export const clearDetails = () => {
  return({
    type: CLEAR_DETAILS,
  });
};

const initialState = {
  location: '',
  website: '',
  phoneNo: '',
  email: '',
};

/* *************************** */
/* sidebar reducer */
export const details = (state = initialState, action) => {
  switch(action.type) {

  case UPDATE_DETAIL:
    state[action.key] = action.value;
    return state;

  case DELETE_DETAIL:
    delete state[action.key];
    return state;

  case CLEAR_DETAILS:
    return {};

  default:
    return state;
  };
};
