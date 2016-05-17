import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotFound from '../components/core/NotFound';
import Md from '../components/core/md';
import Portfolio from '../components/extended/Portfolio';
import Resume from '../components/extended/Resume';
/** Transforms */
// import { mapDispatchToProps } from '../util/redux';
// import resumeActions from '../redux/reducers/transforms/resume';
/**
 * Page Container.
 */
const Page = (props) => {
  const possiblePages = {};
  props.pages.forEach(page => {
    possiblePages[page.title] = page;
  });
  /** NotFound if page title doesn't exist */
  if (!possiblePages[props.params.pageName]) {
    return <NotFound />;
  }
  /** Render with appropriate transform */
  // TODO: generalize this component choice, factor into new function??
  const page = possiblePages[props.params.pageName];
  let component;
  if (page.transform === 'md') {
    component = <Md title={page.title} content={page.content} />;
  } else if (page.transform === 'Portfolio') {
    component = <Portfolio title={page.title} content={page.content} />;
  } else if (page.transform === 'Resume') {
    console.log(props.initialResume);
    component = (
      <Resume
        title={page.title}
        content={page.content}
        initialResume={props.initialResume}
      />
    );
  } else {
    component = <NotFound />;
  }
  return component;
};
Page.propTypes = {
  initialResume: PropTypes.object,
  pages: PropTypes.object.isRequired,
  params: PropTypes.shape({
    pageName: PropTypes.string.isRequired,
  }),
};
export default connect(
  state => ({
    pages: state.pages,
    initialResume: state.resumeTransform.initialResume,
  })
)(Page);