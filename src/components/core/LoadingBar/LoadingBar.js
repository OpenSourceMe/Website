import React from 'react';
import Loading from 'react-loading';
import { css } from 'aphrodite';
import { globals } from '../../../config/theme';
import styles from '../../../common/styles';

const LoadingBar = () => (
  <div className={css(styles.fullScreen, styles.flexCenter)}>
    <Loading
      type="bars"
      color={globals.secondaryColor}
    />
  </div>
);

export default LoadingBar;
