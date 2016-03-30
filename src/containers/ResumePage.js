import React from 'react';
import A4Resume from '../components/Resume';
// nb: this is real funky bc i literally just ported the resume app into here.
//      A4Resume is the container connected to the store.
import theme from '../theme';
import { Style } from 'radium';

// styles for markdown
const rules = {
  'h2, h3': {
    ...theme.header,
    textAlign: 'center',
    padding: '0',
    margin: '0',
  },
  'a': {
    ...theme.link
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
}

const ResumePage = (props) => {
  return (
    <div>
      <Style rules={rules} />
      <A4Resume />
    </div>
  );
};

export default ResumePage;