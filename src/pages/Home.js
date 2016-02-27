import React from 'react';
import Blog from '../components/Blog';
import posts from '../data/posts';

const Home = (props) => {
  return (
    <div>
      <Blog posts={posts}/>
    </div>
  );
};

export default Home;