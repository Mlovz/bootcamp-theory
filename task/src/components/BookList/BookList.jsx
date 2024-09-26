import style from "./BookList.module.css";

const BookList = (props) => {
  return (
    <div className={style.card}>
      {props.booksNew.map((book) => (
        <div>
          <h2>{book.title}</h2>
          <span>{book.author}</span>
        </div>
      ))}
    </div>
  );
};

export default BookList;
