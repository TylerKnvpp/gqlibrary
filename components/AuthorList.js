import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORS } from "../lib/queries";
import AuthorIndexCard from "./AuthorIndexCard";
import _ from "lodash";
import { SpinnerCircular } from "spinners-react";

const BookList = () => {
  const [authorsCollection, setAuthorsCollection] = useState([]);
  const { loading, errors, data } = useQuery(GET_AUTHORS, {
    variables: { skip: 0, first: 10 },
    notifyOnNetworkStatusChange: true
  });

  if (!loading && !authorsCollection.length) {
    const clone = _.clone(data.authors);
    const azCollection = _.sortBy(clone, [
      function(o) {
        return o.name;
      }
    ]);

    setAuthorsCollection(azCollection);
  }

  return (
    <div className="grid">
      {!loading ? (
        authorsCollection.map(author => {
          return <AuthorIndexCard key={author.id} author={author} />;
        })
      ) : (
        <div className="grid">
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
      `}</style>
    </div>
  );
};

export default BookList;
