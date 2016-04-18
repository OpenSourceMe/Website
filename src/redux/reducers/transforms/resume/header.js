/* ********
  AUTHOR: breezykermo
  DATE: 08 February 2016 (Monday)
  DESCRIPTION: header reducer
  NOTES:

******** */
export const UPDATE_NAME = 'header/UPDATE_NAME';
export const updateName = (name) =>
  ({
    type: UPDATE_NAME,
    name,
  });

export const UPDATE_PROFESSION = 'header/UPDATE_PROFESSION';
export const updateProfession = (profession) =>
  ({
    type: UPDATE_PROFESSION,
    profession,
  });

export const CLEAR_HEADER = 'reducer/CLEAR_HEADER';
export const clearHeader = () =>
  ({
    type: CLEAR_HEADER,
  });
/**
 * Header reducer.
 */
const initialState = {
  name: '',
  profession: '',
};
export const header = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.name,
      };

    case UPDATE_PROFESSION:
      return {
        ...state,
        profession: action.profession,
      };

    case CLEAR_HEADER:
      return initialState;

    default:
      return state;
  }
};
