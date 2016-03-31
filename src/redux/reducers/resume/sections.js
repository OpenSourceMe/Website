/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: sections reducer
  NOTES:
    interfacing with pills reducer to generate state

******** */
import { reduceArrayAtIndex } from './utils';
import { pills } from './pills';
import * as pillActions from './pills';

export const ADD_SECTION = 'sections/ADD_SECTION';
export const addSection = (section) =>
  ({
    type: ADD_SECTION,
    section,
  });

export const UPDATE_SECTION_TITLE = 'sections/UPDATE_SECTION_TITLE';
export const updateSectionTitle = (title, index) =>
  ({
    type: UPDATE_SECTION_TITLE,
    title,
    index,
  });

export const UPDATE_SECTION_CONTENT = 'sections/UPDATE_SECTION_CONTENT';
export const updateSectionContent = (content, index) =>
  ({
    type: UPDATE_SECTION_CONTENT,
    content,
    index,
  });

// NB: probably don't need this action, can it all be done from Section component
//        in communication with the Pills reducer?
export const ADD_PILL_AT_SECTION = 'sections/ADD_PILL_AT_SECTION';
export const addPillAtSection = (sectionIndex) =>
  ({
    type: ADD_PILL_AT_SECTION,
    sectionIndex,
  });

export const CLEAR_SECTIONS = 'sections/CLEAR_SECTIONS';
export const clearSections = () =>
  ({
    type: CLEAR_SECTIONS,
  });

/* SECTION REDUCER - not exposed to exports */
/* *************************** */
const defaultSection = {
  title: '',
  content: '',
};

const section = (state = defaultSection, action) => {
  switch (action.type) {
    case UPDATE_SECTION_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case UPDATE_SECTION_CONTENT:
      return {
        ...state,
        content: action.content,
      };

    case ADD_PILL_AT_SECTION:
      return {
        ...state,
        pills: pills(state.pills, pillActions.addPill()),
      };

    default:
      return state;
  }
};
/* end of section reducer */

/* SECTIONS REDUCER */
/* **************************** */
const initialState = [];

export const sections = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SECTION:
      return [
        ...state,
        action.section,
      ];

    case UPDATE_SECTION_TITLE:
      return reduceArrayAtIndex(state, action.index, section, action);

    case UPDATE_SECTION_CONTENT:
      return reduceArrayAtIndex(state, action.index, section, action);

    case ADD_PILL_AT_SECTION:
      return reduceArrayAtIndex(state, action.sectionIndex, section, action);

    case CLEAR_SECTIONS:
      return initialState;

    default:
      return state;
  }
};
