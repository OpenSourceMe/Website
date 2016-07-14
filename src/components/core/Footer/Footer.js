import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Markdown from 'react-remarkable';

const styles = StyleSheet.create({
  container: {
    marginTop: '2em',
    marginBottom: '5em',
  },
  item: {
    paddingTop: '2em',
  },
});

const Footer = props => (
  <div className={`row ${css(styles.container)}`}>
    <br />
    <hr />
    {[props.left, props.center, props.right].map(content => (
      <div className={`col-md-4 text-center ${css(styles.item)}`}>
        <Markdown options={{ html: true }} source={content} />
      </div>
    ))}
  </div>
);
Footer.propTypes = {
  left: PropTypes.string,
  center: PropTypes.string,
  right: PropTypes.string,
};

export default Footer;
