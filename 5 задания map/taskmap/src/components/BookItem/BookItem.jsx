import React from "react";

const BookItem = ({ title, author }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  );
};
export default BookItem;
