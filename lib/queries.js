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

// const GET_AUTHOR = gql`
//       {
//         author(id: "${authorID}") {
//           id
//           name
//           bio
//           picture
//           age
//           books {
//             id
//             title
//             bookCover
//             summary
//           }
//         }
//       }
//     `;

// const GET_BOOK = gql`
//     {
//       book(id: "${bookID}") {
//         id
//         title
//         genre
//         summary
//         bookCover
//         author {
//           id
//           name
//           age
//           bio
//           picture
//           books {
//             id
//             title
//             bookCover
//           }
//         }
//       }
//     }
//   `;

export { GET_AUTHORS, GET_BOOKS };
