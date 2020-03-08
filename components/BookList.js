import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_BOOKS = gql`
  query books {
    books {
      title
      author {
        name
      }
    }
  }
`;

const POSTS_PER_PAGE = 10;

const BookList = () => {
  const data = useQuery(GET_BOOKS, {
    variables: { skip: 0, first: POSTS_PER_PAGE },
    notifyOnNetworkStatusChange: true
  });

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1>list</h1>
    </div>
  );
};

export default BookList;
