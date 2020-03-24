import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "../lib/queries";
import BookIndexCard from "./BookIndexCard";

const BookList = () => {
  const { loading, errors, data } = useQuery(GET_BOOKS, {
    variables: { skip: 0, first: 10 },
    notifyOnNetworkStatusChange: true
  });

  return (
    <div className="grid">
      {!loading ? (
        data.books.map(book => {
          return <BookIndexCard key={book.id} book={book} />;
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
