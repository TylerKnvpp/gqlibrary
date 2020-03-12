import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    bookCover: "",
    summary: "",
    authorID: null
  });
  const [addBook, { book }] = useMutation(ADD_BOOK);

  const GET_AUTHORS = gql`
    query {
      authors {
        id
        name
      }
    }
  `;

  const { loading, errors, data } = useQuery(GET_AUTHORS, {
    notifyOnNetworkStatusChange: true
  });

  let renderOptions;

  if (!loading) {
    renderOptions = data.authors.map(author => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log(formData.summary);

    addBook({
      variables: {
        title: formData.title,
        genre: formData.genre,
        bookCover: formData.bookCover,
        summary: formData.summary,
        authorID: formData.authorID
      }
    });
  };

  return (
    <>
      {!loading ? (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="form-label">Author:</label>
            <select
              className="form-select"
              onChange={e =>
                setFormData({
                  ...formData,
                  authorID: e.target.value
                })
              }
            >
              <option value="">Please select an author</option>
              {renderOptions}
            </select>
          </div>

          <div className="input-group">
            <label className="form-label">Title:</label>
            <input
              className="form-input"
              onChange={e =>
                setFormData({
                  ...formData,
                  title: e.target.value
                })
              }
            />
          </div>

          <div className="input-group">
            <label className="form-label">Genre:</label>
            <input
              className="form-input"
              onChange={e =>
                setFormData({
                  ...formData,
                  genre: e.target.value
                })
              }
            />
          </div>

          <div className="input-group">
            <label className="form-label">Book Cover URL:</label>
            <input
              className="form-input"
              onChange={e =>
                setFormData({
                  ...formData,
                  bookCover: e.target.value
                })
              }
            />
          </div>

          <div className="input-group">
            <label className="form-label">summary:</label>
            <textarea
              rows="7"
              cols="50"
              onChange={e =>
                setFormData({
                  ...formData,
                  summary: e.target.value
                })
              }
            />
          </div>

          <button>Add Book</button>
        </form>
      ) : (
        <h1>loading form...</h1>
      )}

      <style jsx>{`
        .form-container {
          margin-left: auto;
          margin-right: auto;
          width: 70%;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5em;
          width: 90%;
        }

        .form-label {
          font-weight: 700;
          margin-bottom: 0.5em;
        }

        .form-input {
          background-color: #f0eded;
          border: none;
          border-radius: 5px;
          font-size: 1em;
          padding: 0.7em;
        }

        .form-select {
          -webkit-appearance: none; /*Removes default chrome and safari style*/
          -moz-appearance: none;
          padding: 0.7em;
          font-size: 1em;
        }

        textarea {
          border-radius: 5px;
          font-size: 1em;
        }

        button {
          background-color: #25aae1;
          border: none;
          border-radius: 5px;
          color: white;
          font-size: 1em;
          font-weight: 700;
          padding: 1em;
        }
      `}</style>
    </>
  );
};

export default BookForm;
