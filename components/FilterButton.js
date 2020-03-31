import React, { useState } from "react";

const FilterButton = props => {
  const [inputState, setInput] = useState("");

  return (
    <div className="filter-container">
      <div className="asc-desc-container">
        <a href="#">
          <h3
            onClick={props.setAscending}
            className={
              props.ascendingState ? "filter-option-selected" : "filter-option"
            }
          >
            A-Z
          </h3>
        </a>

        <a href="#">
          <h3
            onClick={props.setDescending}
            className={
              !props.ascendingState ? "filter-option-selected" : "filter-option"
            }
          >
            Z-A
          </h3>
        </a>
      </div>

      <form>
        <label className="input-label">Search by Title</label>
        <input
          className="search-input"
          value={inputState}
          placeholder="Search"
          onChange={e => setInput(e.target.value)}
        />
      </form>
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }

        .input-label {
          margin: 0.5em;
        }

        .asc-desc-container {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 50%;
        }

        .search-input {
          background: #f2f2f2;
          border: none;
          border-radius: 8px;
          padding: 1em;
          width: 10rem;
        }

        .filter-container {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 80%;
        }

        .filter-option-selected {
          border-bottom-style: solid;
          border-bottom-color: #0070f3;
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .filter-container {
            flex-direction: column;
            width: 70%;
          }

          .search-input {
            width: 90%;
          }

          .asc-desc-container {
            justify-content: space-between;
            width: 85%;
          }

          .search-input {
            margin-top: 0.5em;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterButton;
