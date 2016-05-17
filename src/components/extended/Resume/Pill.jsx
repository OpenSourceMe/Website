import React, { PropTypes } from 'react';

const styles = {
  pillOuter: {
    padding: 0,
    margin: 0,
  },
  pillLeft: {
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  pillBody: {
    textAlign: 'left',
    margin: 0,
    padding: '0 5px',
  },
  subheader: {
    margin: '0 0 4px 0',
    fontSize: 18,
  },
  pillParagraph: {
    fontSize: 12,
  },
  pillRight: {
    fontSize: 8,
  },
};

const Pill = (props) => (
  <div className="col-xs-12" style={styles.pillOuter}>
    <div className="col-xs-2" style={styles.pillLeft}>
      {props.left}
    </div>
    <div className="col-xs-8" style={styles.pillBody}>
      <h4 style={styles.subheader}>{props.body.title}</h4>
      <p style={styles.pillParagraphStyle}>{props.body.content}</p>
    </div>
    <div className="col-xs-2" style={styles.pillRight}>
      {props.right}
    </div>
  </div>
);
Pill.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  body: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default Pill;
