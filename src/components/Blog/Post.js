/* ********
  AUTHOR: breezykermo
  DATE: 26 February 2016 (Friday)
  DESCRIPTION: render blog post from markdown
  NOTES:

******** */
import React from 'react';
import Markdown from 'react-remarkable';


const Post = (props) => {
  return (
    <div>
      <h3>{props.post.title} <br /> <small>{props.post.date}</small></h3>
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