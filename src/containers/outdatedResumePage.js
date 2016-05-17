/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: Page that contains Resume.
  NOTES:

******** */
import React from 'react';
import A4Resume from '../components/extended/Resume';
import theme from '../theme';
import { Style } from 'radium';
/** Styles for Markdown, different from theme markdownRules */
const rules = {
  'h2, h3': {
    ...theme.header,
    textAlign: 'center',
    padding: '0',
    margin: '0',
  },
  a: {
    ...theme.link,
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
};
/**
 * ResumePage Container
 */
const ResumePage = () => (
  <div>
    <Style rules={rules} />
    <A4Resume />
  </div>
);
export default ResumePage;
