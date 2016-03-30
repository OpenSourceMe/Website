/* ********
  AUTHOR: breezykermo
  DATE: 08 February 2016 (Monday)
  DESCRIPTION: Container component for A4 Resume.
  NOTES:
    State management via Redux (https://github.com/rackt/redux)
    Using 'Ducks' modularity (https://github.com/erikras/ducks-modular-redux)
    All actions and props are passed down from this component.

******** */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import Header from './Header';
import Sidebar from './Sidebar';
import Section from './Section';
import theme from './theme';

import * as utilsActions from '../../redux/reducers/resume/utils';

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
      <div className='row' style={pageStyle}>
        <div className="">
          <Header {...this.props.header} />
          <div className='col-xs-4'>
            <Sidebar
              details={this.props.details}
              skills={this.props.skills}
            />
          </div>
          <div className="col-xs-8" style={{padding: '0 2em 0 0'}}>
            {allSections}
          </div>
        </div>
      </div>
    );
  }
}
/** Redux boiler */
const mapDispatchToProps = (dispatch) => {
  const actions = [utilsActions];
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value == 'function')
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
  )(A4Resume)
export default A4ResumeContainer;
