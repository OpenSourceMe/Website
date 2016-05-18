import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../util/redux';
import { routerActions } from 'react-router-redux';
import createFrag from './createFrag';
import sortByDate from './sortByDate';

const styles = {
  center: {
    textAlign: 'center',
  },
};

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
};

export default connect(
  state => ({
    posts: state.home.content,
  }),
  mapDispatchToProps(routerActions)
)(Pieces);
