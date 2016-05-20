import React from 'react';
import { markdownRules } from '../../../config/theme';
import { Style } from 'radium';

const NotFound = () => (
  <div className="container text-center">
    <Style rules={markdownRules} />
    <h3 style={{ textAlign: 'center' }}>Not Found</h3>
    <p>
      if you are groping for something to do, check out how
      <a href="/blog/history-falling-apart">history is falling apart</a>
    </p>
  </div>
);

export default NotFound;
