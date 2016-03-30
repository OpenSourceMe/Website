/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: utility functions for reducers.
  NOTES:
    modelled as a sort of half reducer, with redux-thunk actions
    'fillResume' and 'gradualFillResume' to dispatch multiple
    actions to the store.

******** */
import * as headerActions from './header';
import * as sectionsActions from './sections';
import * as detailsActions from './details';
import * as skillsActions from './skills';

import { delay } from 'lodash';

// return the initial state of a reducer
export const createEmpty = (reducer) => {
  return reducer(undefined, { type: undefined });
};

// return a new state with the value at index reduced by reducer
export const reduceArrayAtIndex = (state, index, reducer, action) => {
  const newState = state.slice();
  newState[index] = reducer(newState[index], action);
  return newState;
}

export const clearResume = () => {
  return dispatch => {
    dispatch(headerActions.clearHeader());
    dispatch(skillsActions.clearSkills());
    dispatch(sectionsActions.clearSections());
    dispatch(detailsActions.clearDetails());
  };
};

// NB: there's a lot wrong with this, possiblity to get more than required, etc.
export const fillResume = (resume) => {
  return dispatch => {

    dispatch(headerActions.updateName(resume.header.name));
    dispatch(headerActions.updateProfession(resume.header.profession));

    dispatch(detailsActions.clearDetails());
    Object.keys(resume.details).forEach(key => {
      dispatch(detailsActions.updateDetail(key, resume.details[key]));
    });

    dispatch(skillsActions.clearSkills());
    Object.keys(resume.skills).forEach(key => {
      dispatch(skillsActions.addSkill(key, resume.skills[key]));
    });

    dispatch(sectionsActions.clearSections());
    resume.sections.forEach(section => {
      dispatch(sectionsActions.addSection(section));
    });
  }
};

export const gradualFillResume = (resume) => {
  return dispatch => {

    // clear resume before filling
    dispatch(headerActions.updateName(''))
    dispatch(headerActions.updateProfession(''))
    dispatch(detailsActions.clearDetails());
    dispatch(skillsActions.clearSkills());
    dispatch(sectionsActions.clearSections());

    let interval = 100;
    let gap = 0;

    const type = (text, callback) => {
      let textSoFar = '';
      for (let letter of text) {
        textSoFar += letter;
        delay(dispatch, gap, callback(textSoFar));
        gap += interval;
      }
    };

    // header
    type(resume.header.name, headerActions.updateName);
    type(resume.header.profession, headerActions.updateProfession);

    // slow down
    interval = 150;

    // details
    delay(dispatch, 0, (detailsActions.clearDetails()));
    Object.keys(resume.details).forEach(key => {
      delay(dispatch, gap, (detailsActions.updateDetail(key, resume.details[key])));
      gap += interval;
    });

    // slow down
    interval = 200;

    // skills
    delay(dispatch, 0, skillsActions.clearSkills());
    Object.keys(resume.skills).forEach(key => {
      delay(dispatch, gap, (skillsActions.addSkill(key, resume.skills[key])));
      gap += interval;
    });

    // sections
    delay(dispatch, 0, sectionsActions.clearSections())
    resume.sections.forEach(section => {
      delay(dispatch, gap, (sectionsActions.addSection(section)));
      gap += interval;
    });
  }
};