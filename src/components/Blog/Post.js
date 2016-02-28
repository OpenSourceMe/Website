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

import NotFound from '../NotFound';
import RegularPost from './RegularPost';
import SongPost from './SongPost';


const styles = {
  body: {
    maxWidth: '80%',
  },
};

const Post = (props) => {
  // find right content from query param
  const potentialNames = props.posts.map(p => p.title.replace(/\s+/g, '-').toLowerCase());
  const index = potentialNames.indexOf(props.params.postName)
  if (index == -1) {
    return <NotFound />;
  }
  const details = props.posts[index];

  let content;
  if ('type' in details && details.type != 'regular') {
    switch (details.type) {
      case 'song':
        content = <SongPost {...details} />
    }
  } else {
    content = <RegularPost {...details} />
  }

  return (
    <div className='container' style={styles.body}>
      {content}
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