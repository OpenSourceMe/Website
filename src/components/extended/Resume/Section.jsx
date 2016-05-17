import React, { PropTypes } from 'react';
import { markdown } from 'markdown';
import Pill from './Pill';
import theme from './theme';

const styles = {
  container: {
    padding: '1em 0 0 1em',
  },
  title: {
    textAlign: 'right',
    padding: '0',
    margin: '8px 2em',
  },
  hr: {
    margin: '0 0 15px 0',
    borderColor: theme.highlightColor,
    backgroundColor: theme.highlightColor,
    color: theme.highlightColor,
  },
  inner: {
    paddingRight: '10px',
  },
  themed: {
    color: theme.mainColor,
  },
};

const Section = (props) => {
  const firstThreeLetters = props.title.substring(0, 3).toLowerCase();
  const restOfTitle = props.title.substring(3).toLowerCase();

  // markdown available for content only
  const createMarkup = () => ({ __html: markdown.toHTML(props.content) });

  // content can be an array of Pills or a SectionContent
  const content = props.pills
    ? props.pills.map((pillProps, index) => <Pill key={index} {...pillProps} />)
    : <p dangerouslySetInnerHTML={createMarkup()} style={styles.inner} />;

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>
        <span style={styles.themed}>{firstThreeLetters}</span>{restOfTitle}
      </h3>
      <hr style={styles.hr} />
      <div>
        {content}
      </div>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  pills: PropTypes.array,
};

export default Section;
