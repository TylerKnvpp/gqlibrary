import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import AuthorCard from "../../components/AuthorCard";

export default withData(props => {
  const router = useRouter();
  const bookID = router.query.id;

  const GET_BOOK = gql`
    {
      book(id: "${bookID}") {
        id
        title
        genre
        summary
        bookCover
        author {
          name
          age
          bio
          picture
          books {
            id
            title
            bookCover
          }
        }
      }
    }
  `;

  const query = useQuery(GET_BOOK, {
    notifyOnNetworkStatusChange: true
  });

  let book;
  let author;

  if (!query.loading) {
    book = query.data.book;
    author = book.author;
  }

  return (
    <Layout>
      {!query.loading ? (
        <div>
          <div className="book-container">
            <img
              className="cover"
              src={book.bookCover}
              alt={`Cover of ${book.title}`}
            />
            <div className="details-container">
              <h1 className="title">{book.title}</h1>
              <h3 style={{ color: "grey" }}>{author.name}</h3>
              <p>
                {book.title} {book.summary}
              </p>
            </div>
          </div>
          <AuthorCard author={author} bookID={book.id} />
        </div>
      ) : (
        <h1 style={{ width: "auto", marginLeft: "auto", marginRight: "auto" }}>
          loading . .{" "}
        </h1>
      )}
      <style jsx>{`
        p {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        h3 {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .cover {
          width: auto;
          height: auto;
        }

        .book-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 3em;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }

        .details-container {
          margin-top: auto;
          margin-bottom: auto;
          width: 65%;
        }

        .title {
          color: #0070f3;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .book-container {
            flex-direction: column;
          }

          .cover {
            width: 100%;
            height: auto;
          }

          .details-container {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
});
