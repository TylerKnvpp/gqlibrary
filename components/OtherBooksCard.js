const OtherBooksCard = props => {
  return (
    <div style={{ marginTop: "3em" }}>
      <h3>Books from {props.author}</h3>
      <div className="books-container">
        {props.books.map(book => {
          return (
            <div key={book.id}>
              <img src={book.bookCover} />
              <p>{book.title}</p>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .books-container {
          display: flex;
          flex-direction: row;
          overflow: scroll;
        }

        h3 {
          color: grey;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        p {
          font-size: 0.6em;
          margin-left: auto;
          margin-right: auto;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          width: auto;
        }
      `}</style>
    </div>
  );
};

export default OtherBooksCard;
