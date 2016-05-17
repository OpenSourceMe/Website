/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Sidebar component
  NOTES:

******** */
import React, { PropTypes } from 'react';
import Details from './Details';
import Skill from './Skill';

const sidebarStyle = {
  padding: '10px',
};

const Sidebar = (props) => {
  const skills = Object.keys(props.skills)
    .map(key => <Skill key={key} name={key} values={props.skills[key]} />);

  return (
    <div style={sidebarStyle}>
      <Details {...props.details}/>
      {skills}
    </div>
  );
};
Sidebar.propTypes = {
  skills: PropTypes.object,
  details: PropTypes.object,
};

export default Sidebar;
