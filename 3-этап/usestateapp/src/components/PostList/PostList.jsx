import React from "react";
import "./post.css";
import PostItem from "../PostItem/PostItem";
import { Link, useParams } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Link to={`/profile/${post.title}`} key={post.time}>
            <PostItem post={post} />
          </Link>
        );
      })}
    </div>
  );
};

export default PostList;
