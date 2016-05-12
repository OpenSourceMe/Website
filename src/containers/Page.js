/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: Standard Page, redirect to NotFound if not listed.
  NOTES:

******** */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotFound from '../components/core/NotFound';
import Md from '../components/core/md';
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
  const page = possiblePages[props.params.pageName];

  return (
    <Md title={page.title} content={page.content} />
  );
};
Page.propTypes = {
  pages: PropTypes.object.isRequired,
  params: PropTypes.shape({
    pageName: PropTypes.string.isRequired,
  }),
};
export default connect(state => ({ pages: state.pages }))(Page);
