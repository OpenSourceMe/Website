/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: skills reducer
  NOTES:
    internal single skill reducer to keep it functional

******** */
import { createEmpty, reduceArrayAtIndex } from './utils.js'

/* SKILL REDUCER - not exposed to exports. */
/* ********************** */
const defaultSkill = {
  name: '',
  values: [],
};

const skill = (state = defaultSkill, action) => {
  switch(action.type) {

  case UPDATE_SKILL:
    return action.skill;

  default:
    return state;
  };
};

/* SKILLS REDUCER */
/* ************************ */
export const ADD_SKILL = 'skills/ADD_SKILL';
export const addSkill = (name, values) => {
  return({
    type: ADD_SKILL,
    name,
    values,
  });
};

export const UPDATE_SKILL = 'skills/UPDATE_SKILL';
export const updateSkill = (skill, index) => {
  return({
    type: UPDATE_SKILL,
    skill,
    index,
  });
};

export const DELETE_SKILL = 'skills/DELETE_SKILL';
export const deleteSkill = (index) => {
  return({
    type: DELETE_SKILL,
    index,
  });
};

export const CLEAR_SKILLS = 'skills/CLEAR_SKILLS';
export const clearSkills = () => {
  return({
    type: CLEAR_SKILLS,
  });
};

const initialState = [];

/* reducer */
export const skills = (state = initialState, action) => {
  switch(action.type) {

  case ADD_SKILL:
    return [
      ...state,
      {
        name: action.name,
        values: action.values,
      },
    ];

  case UPDATE_SKILL:
    return reduceArrayAtIndex(state, action.index, skill, action);

  case DELETE_SKILL:
    const newState = state.slice();
    newState.splice(action.index, 1);
    return state[action.index] ? newState : state;

  case CLEAR_SKILLS:
    return initialState;

  default:
    return state;
  };
};
