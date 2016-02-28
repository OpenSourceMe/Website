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
import Controls from './Controls';
import theme from './theme';

import * as headerActions from '../redux/reducers/header';
import * as sectionsActions from '../redux/reducers/sections';
import * as detailsActions from '../redux/reducers/details';
import * as skillsActions from '../redux/reducers/skills';
import * as utilsActions from '../redux/reducers/utils';

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

const A4Resume = (props) => {
  const allSections = [];
  props.sections.forEach((sectionProps, key) => {
    allSections.push(<Section key={key} id={key} {...sectionProps} />);
  });

  return (
    <div className='row' style={pageStyle}>
      <div className="">
        <Header {...props.header} />
        <div className='col-xs-4'>
          <Sidebar
            details={props.details}
            skills={props.skills}
          />
        </div>
        <div className="col-xs-8" style={{padding: '0 2em 0 0'}}>
          {allSections}
        </div>
        <div className="col-xs-12">
          <Controls actions={props.actions}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.resume,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = [headerActions, sectionsActions, detailsActions, skillsActions, utilsActions];
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value == 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
};

const A4ResumeContainer = connect(mapStateToProps, mapDispatchToProps)(A4Resume)
export default A4ResumeContainer;