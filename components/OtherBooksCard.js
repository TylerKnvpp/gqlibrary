const OtherBooksCard = props => {
  return (
    <div>
      <h3>More books from {props.name}</h3>
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
