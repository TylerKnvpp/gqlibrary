const OtherBooksCard = props => {
  return (
    <div>
      <h3>Books from {props.author}</h3>
      {props.books.map(book => {
        return (
          <div key={book.id}>
            <img src={book.bookCover} />
            <p>{book.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default OtherBooksCard;
