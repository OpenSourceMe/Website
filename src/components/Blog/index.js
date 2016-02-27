/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: basic blog component, renders all posts or a single post on click
  NOTES:
    posts in props ought to be strings of a certain format (see lib/posts for examples)

******** */
import React from 'react';
import Post from './Post';
import Frag from './Frag';
import {createBlogObject} from './utils';

const styles = {
  center: {
    textAlign: 'center',
  },
};

const createFrag = (md, index, onFragClick) => {
  const blogObj = createBlogObject(md);

  return (
    <Frag key={index} onClickHandler={onFragClick} {...blogObj} />
  );
};

const Blog = React.createClass({
  getInitialState: function() {
    return {
      postShowing: false
    };
  },

  showPost: () => {
    console.log(this.state);
  },

  render() {
    return (
      <div>
        {this.state.postShowing
          ? <Post post={this.state.postShowing} />
          : <div style={styles.center}>
              {this.props.posts.map((md, index) => {
                const onFragClick = () => {
                  this.setState({
                    postShowing: createBlogObject(md),
                  });
                };
                return createFrag(md, index, onFragClick);
              })}
            </div>}
      </div>

    );
  }
});


export default Blog;