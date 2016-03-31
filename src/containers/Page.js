/* ********
  AUTHOR: breezykermo
  DATE: 31 March 2016 (Thursday)
  DESCRIPTION: Standard Page, redirect to NotFound if not listed.
  NOTES:

******** */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotFound from '../components/NotFound';
import PageContent from '../components/PageContent';
/**
 * Page Container.
 */
const Page = (props) => {
  /** NotFound if page name not listed. A little hacky.*/
  if (!props.pages[props.params.pageName]) {
    return <NotFound />;
  }
  const page = props.pages[props.params.pageName];

  return (
    <PageContent title={page.title} content={page.content} />
  );
};
Page.propTypes = {
  pages: PropTypes.object.isRequired,
  params: PropTypes.shape({
    pageName: PropTypes.string.isRequired,
  }),
};
export default connect(state => ({ pages: state.pages }))(Page);
