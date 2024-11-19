import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <span>{post.time}</span>
      <p>{post.desc}</p>
    </div>
  );
};

export default PostItem;
