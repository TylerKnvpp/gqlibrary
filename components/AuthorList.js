import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import AuthorIndexCard from "./AuthorIndexCard";

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      bio
      picture
      books {
        id
        title
        summary
        bookCover
      }
    }
  }
`;

const AUTHORS_PER_PAGE = 10;

const BookList = () => {
  const { loading, errors, data } = useQuery(GET_AUTHORS, {
    variables: { skip: 0, first: AUTHORS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });

  return (
    <div className="grid">
      {!loading ? (
        data.authors.map(author => {
          return <AuthorIndexCard key={author.id} author={author} />;
        })
      ) : (
        <h1>loading...</h1>
      )}
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 90%;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
};

export default BookList;
