import React from "react";
import BookItem from "../BookItem/BookItem";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book, i) => (
        <BookItem title={book.title} author={book.author} />
      ))}
    </div>
  );
};
export default BookList;
