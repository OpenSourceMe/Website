/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: render blog post from markdown
  NOTES:

******** */
import React from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';

import Markdown from 'react-remarkable';
import { Style } from 'radium';
import theme from '../../theme';

import NotFound from '../NotFound';


const styles = {
  body: {
    maxWidth: '80%',
  },
};
// styles for markdown
//
const rules = {
  'h3': {
    ...theme.header,
    textAlign: 'right',
  },
  'a': {
    ...theme.link
  },
  'a:hover': {
    ...theme.link[':hover'], // no deep merging in spread syntax
    textDecoration: 'none',
  },
  'p': {
    fontFamily: 'Helvetica',
    fontSize: '16px',
    lineHeight: '22px',
  }
}

const Post = (props) => {
  // find right content from query param
  const potentialNames = props.posts.map(p => p.title.replace(/\s+/g, '-').toLowerCase());
  const index = potentialNames.indexOf(props.params.postName)
  if (index == -1) {
    return <NotFound />;
  }
  const details = props.posts[index];

  return (
    <div className='container' style={styles.body}>
      <h3>{details.title} <br /> <small>{details.date}</small></h3>
      <Style rules={rules} />
      <Markdown
        options={'full', {
          full: true,
          html: true,
          typographer: true,
          linkify: true,
        }}
        source={details.content} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
      ...state.blog,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = [routerActions];
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);