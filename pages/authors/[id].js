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
          <img
            src={data.author.picture}
            alt={`Photo of author ${data.author.picture}`}
          />
          <h1 className="title">{data.author.name}</h1>
          <p>{data.author.bio}</p>
          <OtherBooksCard author={data.author.name} books={data.author.books} />
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
