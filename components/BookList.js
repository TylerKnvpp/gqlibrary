import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import BookIndexCard from "./BookIndexCard";

const GET_BOOKS = gql`
  query books {
    books {
      id
      title
      author {
        name
      }
    }
  }
`;

const BOOKS_PER_PAGE = 10;

const BookList = () => {
  const data = useQuery(GET_BOOKS, {
    variables: { skip: 0, first: BOOKS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });

  if (data && data.data) {
    console.log(data.data.books);
  }

  return (
    <div className="grid">
      {data && data.data ? (
        data.data.books.map(book => {
          return <BookIndexCard key={book.id} book={book} />;
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

          max-width: 800px;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
};

export default BookList;
