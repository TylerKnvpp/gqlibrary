import withData from "../../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import AuthorCard from "../../components/AuthorCard";

export default withData(props => {
  const router = useRouter();
  const bookID = router.query.id;

  const GET_BOOK = gql`
    {
      book(id: "${bookID}") {
        id
        title
        genre
        summary
        bookCover
        author {
          name
          age
          bio
          picture
          books {
            id
            title
            bookCover
          }
        }
      }
    }
  `;

  const query = useQuery(GET_BOOK, {
    notifyOnNetworkStatusChange: true
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
          <img src={book.bookCover} alt={`Cover of ${book.title}`} />
          <h1 className="title">{book.title}</h1>
          <p>{book.summary}</p>
          <AuthorCard author={author} bookID={book.id} />
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
    </Layout>
  );
});
