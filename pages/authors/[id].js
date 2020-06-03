import React, { useState } from "react";
import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import OtherBooksCard from "../../components/OtherBooksCard";
import Head from "next/head";
import { SpinnerCircular } from "spinners-react";
import { GET_AUTHOR } from "./../../lib/queries";

export default withData((props) => {
  const [authorState, setAuthorState] = useState();
  const router = useRouter();
  const authorID = router.query.id;

  const { loading, errors, data } = useQuery(GET_AUTHOR, {
    variables: {
      id: authorID,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !authorState) {
    setAuthorState(data.author);
  }

  return (
    <Layout>
      {!loading && authorState ? (
        <div>
          <Head>
            <title>{authorState.name}</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="inline-container">
            <div className="image-cropper">
              <img
                className="profile-pic"
                src={authorState.picture}
                alt={`Photo of author ${authorState.picture}`}
              />
            </div>

            <div className="copy-container">
              <h1 className="title">{authorState.name}</h1>
              <p>{authorState.bio}</p>
            </div>
          </div>

          <div className="books-container">
            <OtherBooksCard
              author={authorState.name}
              books={authorState.books}
            />
          </div>
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
        h3 {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .title {
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

        .inline-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: auto;
          margin-right: auto;
          margin-top: 5em;
          width: 70%;
        }

        .image-cropper {
          margin-top: auto;
          margin-bottom: auto;
          width: 200px;
          height: 200px;
          position: relative;
          overflow: hidden;
          border-radius: 50%;
        }

        .profile-pic {
          display: inline;
          margin: 0 auto;
          margin-left: 0%; //centers the image
          height: 100%;
          width: auto;
        }

        .copy-container {
          width: 65%;
        }

        .books-container {
          margin-left: auto;
          margin-right: auto;

          width: 70%;
        }

        @media (max-width: 600px) {
          .copy-container {
            text-align: center;
            width: 85%;
          }

          .inline-container {
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            margin-top: 3em;
            width: 90%;
          }

          .image-cropper {
            margin-left: auto;
            margin-right: auto;
          }

          .copy-container {
            margin-left: auto;
            margin-right: auto;
          }

          .books-container {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
          }

          .title {
            text-align: center;
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
