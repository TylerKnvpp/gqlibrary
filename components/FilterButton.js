import React, { useState } from "react";

const FilterButton = props => {
  const [inputState, setInput] = useState("");

  return (
    <div className="switch-container">
      <a href="#">
        <h2
          onClick={props.setAscending}
          className={
            props.ascendingState ? "switch-option-selected" : "switch-option"
          }
        >
          A-Z
        </h2>
      </a>

      <a href="#">
        <h2
          onClick={props.setDescending}
          className={
            !props.ascendingState ? "switch-option-selected" : "switch-option"
          }
        >
          Z-A
        </h2>
      </a>

      <form>
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

        .search-input {
          background: #f2f2f2;
          border: none;
          border-radius: 8px;
          padding: 1em;
          width: 10rem;
        }

        .switch-container {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 50%;
        }

        .switch-option-selected {
          border-bottom-style: solid;
          border-bottom-color: #0070f3;
          color: #0070f3;
        }

        @media (max-width: 600px) {
          .switch-container {
            width: 70%;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterButton;
