import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

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

const AuthorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    bio: "",
    picture: ""
  });
  const [addAuthor, { author }] = useMutation(ADD_AUTHOR);

  const handleSubmit = e => {
    e.preventDefault();

    addAuthor({
      variables: {
        name: formData.name,
        age: formData.age,
        bio: formData.bio,
        picture: formData.picture
      }
    });
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            onChange={e =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
          />
        </div>

        <div className="input-group">
          <label className="form-label">Age:</label>
          <input
            className="form-input"
            onChange={e =>
              setFormData({
                ...formData,
                age: parseInt(e.target.value)
              })
            }
          />
        </div>

        <div className="input-group">
          <label className="form-label">Picture URL:</label>
          <input
            className="form-input"
            onChange={e =>
              setFormData({
                ...formData,
                picture: e.target.value
              })
            }
          />
        </div>

        <div className="input-group">
          <label className="form-label">Bio:</label>
          <textarea
            rows="7"
            cols="50"
            onChange={e =>
              setFormData({
                ...formData,
                bio: e.target.value
              })
            }
          />
        </div>

        <div className="button-container">
          <Link href="/add-new-book">
            <a href="#">Add a Book</a>
          </Link>
          <button>Add Author</button>
        </div>
      </form>
      )
      <style jsx>{`
        button:hover {
          background: blue;
          box-shadow: 1px 2px 4px grey;
        }

        .button-container {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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

export default AuthorForm;
