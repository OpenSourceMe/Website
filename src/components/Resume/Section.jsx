/* ********
  AUTHOR: breezykermo
  DATE: 07 February 2016 (Sunday)
  DESCRIPTION: Section (e.g., 'Education') in Resume
  NOTES:
    Stateless component.

******** */
import React from 'react';
import { markdown } from 'markdown';
import Pill from './Pill';
import theme from './theme';

const titleStyle = {
  textAlign: 'right',
  padding: '0',
  margin: '8px 2em',
};

const hrStyle = {
  margin: '0 0 15px 0',
  borderColor: theme.highlightColor,
  backgroundColor: theme.highlightColor,
  color: theme.highlightColor,
};

const Section = (props) => {
  const firstThreeLetters = props.title.substring(0, 3).toLowerCase();
  const restOfTitle = props.title.substring(3).toLowerCase();

  // markdown available for content only
  const createMarkup = () => {
    return { __html: markdown.toHTML(props.content), };
  };

  // content can be an array of Pills or a SectionContent
  const content = props.pills
    ? props.pills.map((pillProps, index) => <Pill key={index} {...pillProps} />)
    : <p dangerouslySetInnerHTML={createMarkup()} style={{paddingRight: '10px'}} />;

  return (
    <div style={{padding: '1em 0 0 1em'}}>
      <h3 style={titleStyle}>
        <span style={{color: theme.mainColor}}>{firstThreeLetters}</span>{restOfTitle}
      </h3>
      <hr style={hrStyle} />
      <div>
        {content}
      </div>
    </div>
  );
};

export default Section;
