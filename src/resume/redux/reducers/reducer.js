/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: main reducer
  NOTES:

******** */
import { combineReducers } from 'redux';
import { header } from './header';
import { details } from './details';
import { skills } from './skills';
import { sections } from './sections';

export const resumeReducer = combineReducers({
  header,
  details,
  skills,
  sections,
});

