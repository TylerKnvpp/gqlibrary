import Link from "next/link";

const OtherBooksCard = props => {
  return (
    <div style={{ marginTop: "3em" }}>
      <h3 className="header">Books from {props.author}</h3>
      <div className="books-container">
        {props.books.map(book => {
          return (
            <Link href="/books/[id]" as={`/books/${book.id}`}>
              <a href="#" className="book" key={book.id}>
                <img className="book-cover" src={book.bookCover} />
                <p className="book-title">{book.title}</p>
              </a>
            </Link>
          );
        })}
      </div>
      <style jsx>{`
        .books-container {
          display: flex;
          flex-direction: row;
          overflow: scroll;
        }

        .book {
          color: grey;
          margin-right: 4em;
          text-decoration: none;
        }

        .book:hover {
          color: blue;
        }

        .book-cover {
          height: 200px;
          width: auto;
        }

        .book-title {
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

        @media (max-width: 600px) {
          .header {
            margin-bottom: 2em;
          }

          .books-container {
            flex-direction: column;
            overflow: ;
          }

          .book {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2em;
          }

          .book-cover {
            margin-left: 50px;
            margin-right: 50px;
            width: 200px;
            height: auto;
          }

          .book-title {
            font-size: 1em;
            margin-left: auto;
            margin-right: auto;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            text-align: center;
            width: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default OtherBooksCard;
