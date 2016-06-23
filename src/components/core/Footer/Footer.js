import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';
import { markdownRules } from '../../../config/theme';
import { Style } from 'radium';

const styles = {
  container: {
    marginTop: '2em',
    marginBottom: '5em',
  },
  item: {
    paddingTop: '2em',
  },
};

const Footer = props => (
  <div className="row" style={styles.container}>
    <br />
    <hr />
    <Style rules={markdownRules} />
    <div style={styles.item} className="col-md-4 text-center">
      <Markdown options={{ html: true }} source={props.left} />
    </div>
    <div style={styles.item} className="col-md-4 text-center">
      <Markdown options={{ html: true }} source={props.center} />
    </div>
    <div style={styles.item} className="col-md-4 text-center">
      <Markdown options={{ html: true }} source={props.right} />
    </div>
  </div>
);
Footer.propTypes = {
  left: PropTypes.string,
  center: PropTypes.string,
  right: PropTypes.string,
};

export default Footer;
