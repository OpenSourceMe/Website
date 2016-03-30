/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: Sidebar component
  NOTES:

******** */
import React from 'react';
import Details from './Details';
import Skill from './Skill';

const sidebarStyle = {
  padding: '10px',
};

const Sidebar = (props) => {
  const skills = props.skills.map((skillProps, index) => {
    return <Skill key={index} {...skillProps} />
  });

  return (
    <div style={sidebarStyle}>
      <Details {...props.details}/>
      {skills}
    </div>
  );
};

export default Sidebar;