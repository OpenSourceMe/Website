import React from 'react';
import { connect } from 'react-redux';
import NotFound from '../components/NotFound';
import PageContent from '../components/PageContent'

const Page = (props) => {
  if (!props[props.params.pageName]) {
    return <NotFound />;
  }

  const page = props[props.params.pageName];
  return (
    <div>
      <PageContent title={page.title} content={page.content} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.pages,
  };
};

export default connect(mapStateToProps)(Page);