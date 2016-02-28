/* ********
  AUTHOR: breezykermo
  DATE: 08 February 2016 (Monday)
  DESCRIPTION: header reducer
  NOTES:

******** */
export const UPDATE_NAME = 'header/UPDATE_NAME';
export const updateName = (name) => {
  return({
    type: UPDATE_NAME,
    name,
  });
};

export const UPDATE_PROFESSION = 'header/UPDATE_PROFESSION';
export const updateProfession = (profession) => {
  return({
    type: UPDATE_PROFESSION,
    profession,
  });
};

const initialState = {
  name: '',
  profession: '',
};

export const header = (state = initialState, action) => {
  switch(action.type) {
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

  default:
    return state;
  };
};
