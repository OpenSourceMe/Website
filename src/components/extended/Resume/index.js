import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import theme from './theme';

const styles = StyleSheet.create({
  pageStyle: {
    background: theme.backgroundColor,
    width: '21cm',
    height: '29.7cm',
    display: 'block',
    margin: '0 auto',
    marginBottom: '0.5cm',
    boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
    position: 'relative',
  },
  sectionPadding: {
    padding: '0 2em 0 0',
  },
});

const Resume = props => {
  const { content } = props;
  const allSections = [];

  return (
    <div className={`row ${css(styles.pageStyle)}`}>
      <Header {...content.header} />
      <div className="col-xs-4">
        <Sidebar
          details={content.details}
          skills={content.skills}
        />
      </div>
      <div className={`col-xs-8 ${css(styles.sectionPadding)}`}>
        {content.sections.forEach((sectionProps, key) => {
          allSections.push(<Section key={key} id={key} {...sectionProps} />);
        })}
      </div>
    </div>
  );
};
Resume.propTypes = {
  content: PropTypes.object,
  initialResume: PropTypes.object,
};

export default Resume;
