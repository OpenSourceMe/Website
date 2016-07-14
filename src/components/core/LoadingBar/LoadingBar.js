import React from 'react';
import Loading from 'react-loading';
import { globals } from '../../../config/theme';

const LoadingBar = () => (
  <div
    style={{
      display: 'flex',
      height: '100vh',
      borderRadius: 5000,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Loading
      style={{ height: 200, width: 200 }}
      type="bars"
      color={globals.secondaryColor}
    />
  </div>
);

export default LoadingBar;
