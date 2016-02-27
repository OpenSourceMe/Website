/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: basic blog component, renders all posts or a single post on click
  NOTES:
    posts in props ought to be strings of a certain format (see lib/posts for examples)

******** */
import React, {
  PropTypes,
} from 'react';

import { bindActionCreators } from 'redux';
import { push, routerActions } from 'react-router-redux';
import { connect } from 'react-redux';
import {Map} from 'immutable';

import Frag from './Frag';

const styles = {
  center: {
    textAlign: 'center',
  },
};

const createFrag = (post, index, onFragClick) => {
  return (
    <Frag key={index} onClickHandler={onFragClick} title={post.title} date={post.date} />
  );
};

const Blog = React.createClass({

  propTypes: {
    dispatch: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
  },

  render() {
    return (
      <div>
        <div style={styles.center}>
          {this.props.posts.map((post, index) => {
            const onFragClick = () => {
              this.props.actions.push('blog/'+index);
            };
            return createFrag(post, index, onFragClick);
          })}
        </div>
      </div>

    );
  }
});

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


export default connect(mapStateToProps, mapDispatchToProps)(Blog);