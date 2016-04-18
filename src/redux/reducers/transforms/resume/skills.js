/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Skills reducer.
  NOTES:
    internal single skill reducer to keep it functional

******** */
import { reduceArrayAtIndex } from './utils.js';

export const ADD_SKILL = 'skills/ADD_SKILL';
export const addSkill = (name, values) =>
  ({
    type: ADD_SKILL,
    name,
    values,
  });

export const UPDATE_SKILL = 'skills/UPDATE_SKILL';
export const updateSkill = (skill, index) =>
  ({
    type: UPDATE_SKILL,
    skill,
    index,
  });

export const DELETE_SKILL = 'skills/DELETE_SKILL';
export const deleteSkill = (index) =>
  ({
    type: DELETE_SKILL,
    index,
  });

export const CLEAR_SKILLS = 'skills/CLEAR_SKILLS';
export const clearSkills = () =>
  ({
    type: CLEAR_SKILLS,
  });
/**
 * Reducer for individual skill.
 */
const defaultSkill = {
  name: '',
  values: [],
};
const skillReducer = (state = defaultSkill, action) => {
  switch (action.type) {
    case UPDATE_SKILL:
      return action.skill;

    default:
      return state;
  }
};
/**
 * Skills reducer
 */
const initialState = [];
export const skills = (state = initialState, action) => {
  const newState = state.slice();
  switch (action.type) {
    case ADD_SKILL:
      return [
        ...state,
        {
          name: action.name,
          values: action.values,
        },
      ];

    case UPDATE_SKILL:
      return reduceArrayAtIndex(state, action.index, skillReducer, action);

    case DELETE_SKILL:
      newState.splice(action.index, 1);
      return state[action.index] ? newState : state;

    case CLEAR_SKILLS:
      return initialState;

    default:
      return state;
  }
};
