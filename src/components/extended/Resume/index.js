/* ********
  AUTHOR: breezykermo
  DATE: 08 February 2016 (Monday)
  DESCRIPTION: Container component for A4 Resume.
  NOTES:
    All actions and props for Resume are passed down from this component.

******** */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Style } from 'radium';
/** Components */
import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import theme from '../../../theme';
/** Actions */
// import { mapDispatchToProps } from '../../../util/redux';
// import * as utilsActions from '../../../redux/reducers/transforms/resume/utils';

/** Styles */
const pageStyle = {
  background: theme.backgroundColor,
  width: '21cm',
  height: '29.7cm',
  display: 'block',
  margin: '0 auto',
  marginBottom: '0.5cm',
  boxShadow: '0 0 0.5cm rgba(0,0,0,0.5)',
  position: 'relative',
};
/**
 * A4Resume component, index point for Resume inner app.
 */
class A4Resume extends React.Component {
  static propTypes = {
    content: PropTypes.object,
    initialResume: PropTypes.object,
    // actions: PropTypes.objectOf(PropTypes.func),
  };
  /** Fill with data on mount */
  componentDidMount() {
    // this.props.actions.gradualFillResume(this.props.initialResume);
  }
  /** Clear data on unmount */
  componentWillUnmount() {
    // this.props.actions.clearResume();
  }
  /** Render */
  render() {
    const allSections = [];
    this.props.content.sections.forEach((sectionProps, key) => {
      allSections.push(<Section key={key} id={key} {...sectionProps} />);
    });
    return (
      <div className="row" style={pageStyle}>
        <Style rules={{}} />
        <div className="">
          <Header {...this.props.content.header} />
          <div className="col-xs-4">
            <Sidebar
              details={this.props.content.details}
              skills={this.props.content.skills}
            />
          </div>
          <div className="col-xs-8" style={{ padding: '0 2em 0 0' }}>
            {allSections}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.resumeTransform
  // mapDispatchToProps(utilsActions)
)(A4Resume);
