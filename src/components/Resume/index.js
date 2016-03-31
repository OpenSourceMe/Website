/* ********
  AUTHOR: breezykermo
  DATE: 08 February 2016 (Monday)
  DESCRIPTION: Container component for A4 Resume.
  NOTES:
    All actions and props for Resume are passed down from this component.

******** */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
/** Components */
import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import theme from './theme';
/** Actions */
import * as utilsActions from '../../redux/reducers/resume/utils';

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
  /** Fill with data on mount */
  componentDidMount() {
    this.props.actions.gradualFillResume(this.props.initialResume);
  }
  /** Clear data on unmount */
  componentWillUnmount() {
    this.props.actions.clearResume();
  }
  /** Render */
  render() {
    const allSections = [];
    this.props.sections.forEach((sectionProps, key) => {
      allSections.push(<Section key={key} id={key} {...sectionProps} />);
    });
    return (
      <div className="row" style={pageStyle}>
        <div className="">
          <Header {...this.props.header} />
          <div className="col-xs-4">
            <Sidebar
              details={this.props.details}
              skills={this.props.skills}
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
A4Resume.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string,
    profession: PropTypes.string,
  }),
  details: PropTypes.shape({
    email: PropTypes.string,
    location: PropTypes.string,
    phoneNo: PropTypes.string,
    website: PropTypes.string,
  }),
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  })),
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })),
  initialResume: PropTypes.object, // NB: couldn't be bothered writiing this out again.
  actions: PropTypes.objectOf(PropTypes.func),
};
/** Redux boiler */
const mapDispatchToProps = (dispatch) => {
  const actions = [utilsActions];
  const creators = Map() // eslint-disable-line new-cap
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
};
/** Create Redux Container */
const A4ResumeContainer = connect(
  state => state.resume,
  mapDispatchToProps
  )(A4Resume);
export default A4ResumeContainer;
