import React, { useState } from "react";
import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import AuthorCard from "../../components/AuthorCard";
import Head from "next/head";
import { SpinnerCircular } from "spinners-react";
import { GET_BOOK } from "./../../lib/queries";

export default withData((props) => {
  const [bookState, setBookState] = useState();
  const [authorState, setAuthorState] = useState();
  const router = useRouter();
  const bookID = router.query.id;

  const { loading, data, errors } = useQuery(GET_BOOK, {
    variables: {
      id: bookID,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !bookState && !authorState) {
    setBookState(data.book);
    setAuthorState(data.book.author);
  }

  return (
    <Layout>
      {!loading && bookState ? (
        <div>
          <Head>
            <title>{bookState.title}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="book-container">
            <img
              style={{ marginTop: "2em" }}
              className="cover"
              src={bookState.bookCover}
              alt={`Cover of ${bookState.title}`}
            />
            <div className="details-container">
              <h1 className="title">{bookState.title}</h1>
              <h3 style={{ color: "grey" }}>{authorState.name}</h3>
              <p>
                {bookState.title} {bookState.summary}
              </p>
            </div>
          </div>
          <AuthorCard author={authorState} bookID={bookState.id} />
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
          display: flex;
          justify-content: center;
          margin-left: auto;
          margin-top: 10em;
          margin-right: auto;
          height: auto;
          width: auto;
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
