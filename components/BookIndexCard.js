import Link from "next/link";

const BookIndexCard = props => {
  const id = props.book.id;
  const title = props.book.title;
  const bookCover = props.book.bookCover;
  const author = props.book.author.name;
  const summary = props.book.summary;

  return (
    <Link href="/books/[id]" as={`/books/${id}`}>
      <a href="#" className="card">
        <img src={bookCover} alt={`Cover of ${title}`} />
        <div className="copy-container">
          <h3 className="title">
            {title.length > 30 ? title.substring(0, 31).concat("...") : title}{" "}
            &rarr;
          </h3>
          <p className="summary">{summary}</p>
          <p className="author">{author}</p>
        </div>
        <style jsx>{`
          .card {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            width: 100%;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .title {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .author {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .copy-container {
            margin-top: auto;
            margin-bottom: auto;
            width: 51%;
          }

          .summary {
            color: grey;
            font-size: 14px;
            line-height: 1.3;
          }

          @media only screen and (max-width: 600px) {
            .card {
              flex-direction: column;
            }

            .copy-container {
              width: 100%;
            }

            .title {
              margin-top: 1em;
            }
          }
        `}</style>
      </a>
    </Link>
  );
};

export default BookIndexCard;
