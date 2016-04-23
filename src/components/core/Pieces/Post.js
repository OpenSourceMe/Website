/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: render blog post from markdown
  NOTES:

******** */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
/** Components */
import NotFound from '../NotFound';
import RegularPost from './RegularPost';
import SongPost from './SongPost';

/** Styles */
const styles = {
  body: {
    maxWidth: '80%',
  },
};
/**
 * Post container, defers to a type of post.
 */
const Post = (props) => {
  /** Find right content from query param */
  const potentialNames = props.posts.map(p => p.title.replace(/\s+/g, '-').toLowerCase());
  const index = potentialNames.indexOf(props.params.postName);
  if (index === -1) {
    return <NotFound />;
  }
  const details = props.posts[index];
  /** Switch component according to type */
  let content;
  switch (details.type) {
    case 'song':
      content = <SongPost {...details} />;
      break;

    default:
      content = <RegularPost {...details} />;
  }
  /** Return component */
  return (
    <div className="container" style={styles.body}>
      {content}
    </div>
  );
};
Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string,
    types: PropTypes.string,
  })),
  params: PropTypes.shape({
    postName: PropTypes.string.isRequired,
  }),
};
/** Redux boiler */
function mapDispatchToProps(dispatch) {
  const actions = [routerActions];
  const creators = Map() // eslint-disable-line new-cap
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}

export default connect(state => state.blog, mapDispatchToProps)(Post);
