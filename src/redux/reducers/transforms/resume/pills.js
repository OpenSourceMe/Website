/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: pills reducer
  NOTES:
    not exposed to state in components, simply used by
    the sections reducer to generate state.

******** */
import { createEmpty, reduceArrayAtIndex } from './utils';

export const ADD_PILL = 'pills/ADD_PILL';
export const addPill = () =>
  ({
    type: ADD_PILL,
  });

export const UPDATE_PILL = 'pills/UPDATE_PILL';
export const updatePill = (pill, index) =>
  ({
    type: UPDATE_PILL,
    pill,
    index,
  });

export const DELETE_PILL = 'pills/DELETE_PILL';
export const deletePill = (index) =>
  ({
    type: DELETE_PILL,
    index,
  });

// internal reducer, not exposed to node env.
const emptyPill = {
  left: '',
  body: {
    title: '',
    content: '',
  },
  right: '',
};

const pill = (state = emptyPill, action) => {
  switch (action.type) {
    case UPDATE_PILL:
      return action.pill;

    default:
      return state;
  }
};

/* *************************** */
/* sidebar reducer */
export const pills = (state = [], action) => {
  const newState = state.slice();
  switch (action.type) {
    case ADD_PILL:
      return [
        ...state,
        createEmpty(pill),
      ];

    case UPDATE_PILL:
      return reduceArrayAtIndex(state, action.index, pill, action);

    case DELETE_PILL:
      newState.splice(action.index, 1);
      return state[action.index] ? newState : state;

    default:
      return state;
  }
};
