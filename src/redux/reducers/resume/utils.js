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

/**
 * Extract initialState from a reducer.
 * @param  {Function} reducer From where to extract initialState.
 * @return {Object}         initialState
 */
export const createEmpty = (reducer) => reducer(undefined, { type: undefined });
/**
 * Call a reducer on the index of an Array state, passing
 * down an action.
 * @param  {Array} state   Array state.
 * @param  {number} index   Index of element to reduce.
 * @param  {function():Array} reducer Reducer to call on element.
 * @param  {Object} action  Action to pass down to reducer.
 * @return {Array}         Reduced state.
 */
export const reduceArrayAtIndex = (state, index, reducer, action) => {
  const newState = state.slice();
  newState[index] = reducer(newState[index], action);
  return newState;
};
/**
 * Clear resume.
 */
export const clearResume = () =>
  dispatch => {
    dispatch(headerActions.clearHeader());
    dispatch(skillsActions.clearSkills());
    dispatch(sectionsActions.clearSections());
    dispatch(detailsActions.clearDetails());
  };
/**
 * Fill Resume using a given JSON object.
 * @param  {Object} resume - Resume data.
 */
export const fillResume = (resume) =>
  dispatch => {
    // header
    dispatch(headerActions.updateName(resume.header.name));
    dispatch(headerActions.updateProfession(resume.header.profession));
    // details
    dispatch(detailsActions.clearDetails());
    Object.keys(resume.details).forEach(key => {
      dispatch(detailsActions.updateDetail(key, resume.details[key]));
    });
    // skills
    dispatch(skillsActions.clearSkills());
    Object.keys(resume.skills).forEach(key => {
      dispatch(skillsActions.addSkill(key, resume.skills[key]));
    });
    // sections
    dispatch(sectionsActions.clearSections());
    resume.sections.forEach(section => {
      dispatch(sectionsActions.addSection(section));
    });
  };
/**
 * Graduall fill Resume given a JSON object
 * @param  {Object} resume - Resume data.
 */
export const gradualFillResume = (resume) =>
  dispatch => {
    // clear resume before filling
    dispatch(clearResume());
    // setup
    let interval = 100;
    let gap = 0;
    const type = (text, callback) => {
      let textSoFar = '';
      for (const letter of text) {
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
    delay(dispatch, 0, sectionsActions.clearSections());
    resume.sections.forEach(section => {
      delay(dispatch, gap, (sectionsActions.addSection(section)));
      gap += interval;
    });
  };
