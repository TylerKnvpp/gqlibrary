import { gql } from "apollo-boost";

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      bookCover
      summary
      author {
        name
      }
    }
  }
`;

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

const GET_AUTHOR = gql`
  query($id: ID!) {
    author(id: $id) {
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

const GET_BOOK = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      title
      genre
      summary
      bookCover
      author {
        id
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

export { GET_AUTHORS, GET_BOOKS, GET_AUTHOR, GET_BOOK };
