/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: render blog post from markdown
  NOTES:

******** */
import React from 'react';
import Markdown from 'react-remarkable';
import { Style } from 'radium';
import theme from '../../theme';

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
  }
}

const Post = (props) => {
  return (
    <div>
      <h3>{props.post.title} <br /> <small>{props.post.date}</small></h3>
      <Style rules={rules} />
      <Markdown
        options={'full', {
          full: true,
          html: true,
          typographer: true,
          linkify: true,
        }}
        source={props.post.content} />
    </div>
  );
};

export default Post;