/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: details reducer
  NOTES:

******** */
export const UPDATE_DETAIL = 'details/UPDATE_DETAIL';
export const updateDetail = (key, value) =>
  ({
    type: UPDATE_DETAIL,
    key,
    value,
  });

export const DELETE_DETAIL = 'details/DELETE_DETAIL';
export const deleteDetail = (key) =>
  ({
    type: DELETE_DETAIL,
    key,
  });

export const CLEAR_DETAILS = 'details/CLEAR_DETAILS';
export const clearDetails = () =>
  ({
    type: CLEAR_DETAILS,
  });

const initialState = {
  location: '',
  website: '',
  phoneNo: '',
  email: '',
};

/* *************************** */
/* sidebar reducer */
export const details = (state = initialState, action) => {
  const newState = state;
  switch (action.type) {
    case UPDATE_DETAIL:
      newState[action.key] = action.value;
      return newState;

    case DELETE_DETAIL:
      delete newState[action.key];
      return newState;

    case CLEAR_DETAILS:
      return {};

    default:
      return state;
  }
};
