import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import OtherBooksCard from "../../components/OtherBooksCard";

export default withData(props => {
  const router = useRouter();
  const authorID = router.query.id;

  const GET_AUTHOR = gql`
      {
        author(id: "${authorID}") {
          id
          name
          bio
          picture
          age
          books {
            id
            title
            bookCover
            summary 
          }
        }
      }
    `;

  const { loading, errors, data } = useQuery(GET_AUTHOR, {
    notifyOnNetworkStatusChange: true
  });

  return (
    <Layout>
      {!loading ? (
        <div>
          <div className="inline-container">
            <div className="image-cropper">
              <img
                className="profile-pic"
                src={data.author.picture}
                alt={`Photo of author ${data.author.picture}`}
              />
            </div>

            <div className="copy-container">
              <h1 className="title">{data.author.name}</h1>
              <p>{data.author.bio}</p>
            </div>
          </div>

          <div className="books-container">
            <OtherBooksCard
              author={data.author.name}
              books={data.author.books}
            />
          </div>
        </div>
      ) : (
        <h1>loading . . </h1>
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

        .inline-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: auto;
          margin-right: auto;
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
          margin-left: -25%; //centers the image
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
          .inline-container {
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
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
