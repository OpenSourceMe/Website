/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: basic blog component, renders all posts or a single post on click
  NOTES:
    posts in props ought to be strings of a certain format (see lib/posts for examples)

******** */
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
/** Components */
import Frag from './Frag';

/** Styles */
const styles = {
  center: {
    textAlign: 'center',
  },
};
/**
 * Create a post fragment.
 * @param  {Object} post        Post props.
 * @param  {number} index       Index of post in lineup.
 * @param  {function()} onFragClick Handler for onClick.
 * @return {ReactComponent}             Frag component
 */
const createFrag = (post, index, onFragClick) => (
  <Frag key={index} onClickHandler={onFragClick} title={post.title} date={post.date} />
);
/**
 * Blog, houses Frags.
 */
const Blog = (props) => (
  <div style={styles.center}>
    {props.posts.map((post, index) => {
      const onFragClick = () => {
        const name = post.title.replace(/\s+/g, '-').toLowerCase();
        props.actions.push(`/blog/${name}`);
      };
      return createFrag(post, index, onFragClick);
    })}
  </div>
);
Blog.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
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

export default connect(state => state.blog, mapDispatchToProps)(Blog);
