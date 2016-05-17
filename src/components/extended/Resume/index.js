import React, { PropTypes } from 'react';
import { Style } from 'radium';

import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import theme from './theme';

const styles = {
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
};

class Resume extends React.Component {
  render() {
    const { content } = this.props;
    const allSections = [];
    this.props.content.sections.forEach((sectionProps, key) => {
      allSections.push(<Section key={key} id={key} {...sectionProps} />);
    });

    return (
      <div className="row" style={styles.pageStyle}>
        <Style rules={theme.markdownRules} />
        <div className="">
          <Header {...content.header} />
          <div className="col-xs-4">
            <Sidebar
              details={content.details}
              skills={content.skills}
            />
          </div>
          <div className="col-xs-8" style={styles.sectionPadding}>
            {allSections}
          </div>
        </div>
      </div>
    );
  }
}
Resume.propTypes = {
  content: PropTypes.object,
  initialResume: PropTypes.object,
};

export default Resume;
