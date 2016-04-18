import { combineReducers } from 'redux';
import { header } from './header';
import { details } from './details';
import { skills } from './skills';
import { sections } from './sections';
import { initialResume } from './initialResume';
/** Combined reducers relevant to Resume */
export const resumeTransform = combineReducers({
  header,
  details,
  skills,
  sections,
  initialResume,
});
