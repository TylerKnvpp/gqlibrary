import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "../lib/queries";
import BookIndexCard from "./BookIndexCard";
import _ from "lodash";
import { SpinnerCircular } from "spinners-react";

const BookList = (props) => {
  const [booksCollection, setBooksCollection] = useState([]);
  const [descendingState, setDescendingState] = useState(false);
  const { loading, errors, data } = useQuery(GET_BOOKS, {
    variables: { skip: 0, first: 10 },
    notifyOnNetworkStatusChange: true,
  });

  const setAscending = (array) => {
    const clone = _.clone(array.books);
    return _.orderBy(clone, ["title"], ["asc"]);
  };

  const setDescending = (array) => {
    const clone = _.clone(array.books);
    return _.orderBy(clone, ["title"], ["desc"]);
  };

  if (!loading && !booksCollection.length) {
    const ascendingCollection = setAscending(data);
    setBooksCollection(ascendingCollection);
  }

  useEffect(() => {
    if (props.ascendingState) {
      const ascending = setAscending(data);
      setBooksCollection(ascending);
    }

    if (!props.ascendingState) {
      const descending = setDescending(data);
      setBooksCollection(descending);
    }
  }, [props]);

  return (
    <div className="grid">
      {!loading && data ? (
        booksCollection.map((book) => {
          return <BookIndexCard key={book.id} book={book} />;
        })
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
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 90%;
          margin-top: 1rem;
        }

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
      `}</style>
    </div>
  );
};

export default BookList;
