import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ADD_BOOK } from "../lib/mutations";
import { GET_AUTHORS } from "../lib/queries";
import Link from "next/link";
import { SpinnerCircular } from "spinners-react";

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    bookCover: "",
    summary: "",
    authorID: null,
  });
  const [addBook, { book }] = useMutation(ADD_BOOK);

  const { loading, errors, data } = useQuery(GET_AUTHORS, {
    notifyOnNetworkStatusChange: true,
  });

  let renderOptions;

  if (!loading) {
    renderOptions = data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.title &&
      formData.genre &&
      formData.bookCover &&
      formData.summary &&
      formData.authorID
    ) {
      addBook({
        variables: {
          title: formData.title,
          genre: formData.genre,
          bookCover: formData.bookCover,
          summary: formData.summary,
          authorID: formData.authorID,
        },
      });

      alert(`${formData.title} has been submitted!`);

      setFormData({
        title: "",
        genre: "",
        bookCover: "",
        summary: "",
        authorID: null,
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <>
      {!loading && !errors ? (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="form-label">Author:</label>
            <select
              className="form-select"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  authorID: e.target.value,
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />
          </div>

          <div className="input-group">
            <label className="form-label">Genre:</label>
            <input
              className="form-input"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  genre: e.target.value,
                })
              }
            />
          </div>

          <div className="input-group">
            <label className="form-label">Book Cover URL:</label>
            <input
              placeholder="Please use image URL's from barnesandnoble.com"
              className="form-input"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bookCover: e.target.value,
                })
              }
            />
          </div>

          <div className="input-group">
            <label className="form-label">Summary:</label>
            <textarea
              rows="7"
              cols="50"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  summary: e.target.value,
                })
              }
            />
          </div>

          <div className="button-container">
            <Link href="/add-new-author">
              <a href="#">Add an author</a>
            </Link>

            <button>Add Book</button>
          </div>
        </form>
      ) : (
        <div className="loading">
          <SpinnerCircular
            color="#3870ad"
            size={50}
            speed={100}
            thickness={100}
          />
        </div>
      )}
      <style jsx>{`
        .loading {
          align-items: center;
          align-content: center;
          display: flex;
          justify-content: center;
          margin-left: auto;
          margin-top: 10em;
          margin-right: auto;
          height: auto;
          width: auto;
        }

        button:hover {
          background: blue;
          box-shadow: 1px 2px 4px grey;
        }

        .button-container {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-left: auto;
          margin-right: auto;
          width: 90%;
        }

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
