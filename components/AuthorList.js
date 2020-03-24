import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORS } from "../lib/queries";
import AuthorIndexCard from "./AuthorIndexCard";

const BookList = () => {
  const { loading, errors, data } = useQuery(GET_AUTHORS, {
    variables: { skip: 0, first: 10 },
    notifyOnNetworkStatusChange: true
  });

  return (
    <div className="grid">
      {!loading ? (
        data.authors.map(author => {
          return <AuthorIndexCard key={author.id} author={author} />;
        })
      ) : (
        <div className="grid">
          <h1>loading...</h1>
        </div>
      )}
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 90%;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default BookList;
