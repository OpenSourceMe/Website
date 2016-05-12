import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotFound from '../components/core/NotFound';
import Md from '../components/core/md';
import Portfolio from '../components/extended/Portfolio';
import Resume from '../components/extended/Resume';
/**
 * Page Container.
 */
const Page = (props) => {
  /** Format to object with title as ke */
  const possiblePages = {};
  props.pages.forEach(page => {
    possiblePages[page.title] = page;
  });
  /** NotFound if page title doesn't exist */
  if (!possiblePages[props.params.pageName]) {
    return <NotFound />;
  }
  /** Render with appropriate transform */
  // TODO: generalize this component choice,
  const page = possiblePages[props.params.pageName];
  let component;
  if (page.transform === 'md') {
    component = <Md title={page.title} content={page.content} />;
  } else if (page.transform === 'Portfolio') {
    component = <Portfolio title={page.title} content={page.content} />;
  } else if (page.transform === 'Resume') {
    component = <Resume title={page.title} content={page.content} />;
  } else {
    component = <NotFound />;
  }
  return component;
};
Page.propTypes = {
  pages: PropTypes.object.isRequired,
  params: PropTypes.shape({
    pageName: PropTypes.string.isRequired,
  }),
};
export default connect(state => ({ pages: state.pages }))(Page);
