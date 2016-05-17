  /* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: basic blog component, renders all posts or a single post on click
  NOTES:
    posts in props ought to be strings of a certain format (see lib/posts for examples)

******** */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../util/redux';
import { routerActions } from 'react-router-redux';
import sortByDate from './sortByDate';
import Frag from './Frag';

/** Styles */
const styles = {
  center: {
    textAlign: 'center',
  },
};
/**
 * Create a post fragment.
 * @param  {  Object} post        Post props.
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
const Pieces = (props) => (
  <div style={styles.center}>
    {sortByDate(props.posts).map((post, index) => {
      const onFragClick = () => {
        const name = post.title.replace(/\s+/g, '-').toLowerCase();
        props.actions.push(`/pieces/${name}`);
      };
      return createFrag(post, index, onFragClick);
    })}
  </div>
);
Pieces.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    posts: state.home.content,
  }),
  mapDispatchToProps(routerActions)
)(Pieces);
