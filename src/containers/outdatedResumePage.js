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
