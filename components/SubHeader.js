import Link from "next/link";

const SubHeader = () => {
  return (
    <div className="subheader-container">
      <Link href="/add-new-author">
        <a className="subheader-link" href="#">
          Add an Author
        </a>
      </Link>
      <Link href="/add-new-book">
        <a className="subheader-link" href="#">
          Add a Book
        </a>
      </Link>
      <style jsx>{`
        .subheader-container {
          background: black;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          margin: 0;
          padding: 1em;
          width: 100%;
        }

        .subheader-link {
          color: white;
          text-decoration: none;
        }

        subheader-link:hover {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default SubHeader;
