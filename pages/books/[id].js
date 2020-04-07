import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import AuthorCard from "../../components/AuthorCard";
import Head from "next/head";
import { SpinnerCircular } from "spinners-react";
import { GET_BOOK } from "./../../lib/queries";

export default withData((props) => {
  const router = useRouter();
  const bookID = router.query.id;

  const query = useQuery(GET_BOOK, {
    variables: {
      id: bookID,
    },
    notifyOnNetworkStatusChange: true,
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
          <Head>
            <title>{book.title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="book-container">
            <img
              style={{ marginTop: "2em" }}
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
        <div className="loading">
          <SpinnerCircular
            color="#3870ad"
            size={50}
            speed={100}
            thickness={100}
          />
        </div>
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

        .loading {
          align-items: center;
          align-content: center;
          height: 100%;
          width: 100%;
        }

        .cover {
          margin-bottom: auto;
          margin-top: auto;
          width: auto;
          height: 275px;
        }

        .book-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 5em;
          margin-left: auto;
          margin-right: auto;
          margin-top: 5em;
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
            margin-top: 2em;
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
