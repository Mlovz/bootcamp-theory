import React from "react";
import PostList from "../../components/PostList/PostList";

const HomePage = () => {
  const posts = [
    {
      title: 'Post1',
      time: '12.01.2015',
      desc: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Post2',
      time: '29.02.2016',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, qui.'
    },
    {
      title: 'Post1',
      time: '11.10.2030',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]

  return (
    <div>
      <h1>Unusual blog</h1>
      <PostList posts={posts}/>
    </div>
  );
};

export default HomePage;
