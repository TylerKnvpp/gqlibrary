import { gql } from "apollo-boost";

const ADD_AUTHOR = gql`
  mutation AddAuthor(
    $name: String!
    $age: Int!
    $picture: String!
    $bio: String!
  ) {
    addAuthor(name: $name, age: $age, picture: $picture, bio: $bio) {
      id
      name
    }
  }
`;

const ADD_BOOK = gql`
  mutation AddBook(
    $title: String!
    $genre: String!
    $bookCover: String!
    $summary: String!
    $authorID: ID!
  ) {
    addBook(
      title: $title
      genre: $genre
      bookCover: $bookCover
      summary: $summary
      authorID: $authorID
    ) {
      id
      title
    }
  }
`;

export { ADD_AUTHOR, ADD_BOOK };
