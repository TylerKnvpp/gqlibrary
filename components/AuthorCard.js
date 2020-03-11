import OtherBooksCard from "./OtherBooksCard";
import Link from "next/link";

const AuthorCard = props => {
  const picture = props.author.picture;
  const name = props.author.name;
  const bio = props.author.bio;

  const bookCollection = props.author.books.filter(
    book => book.id !== props.bookID
  );

  return (
    <div className="author-card-container">
      <Link href="/authors/[id]" as={`/authors/${props.author.id}`}>
        <a style={{ textDecoration: "none", color: "black" }} href="#">
          <div className="author-inline-container">
            <div className="image-cropper">
              <img
                src={picture}
                alt={`Photo of ${name}`}
                className="profile-pic"
              />
            </div>
            <div className="author-details-container">
              <h4 className="author-name">{name}</h4>
              <p className="author-bio">
                {bio.substring(0, 121).concat("...")}
              </p>
            </div>
          </div>
        </a>
      </Link>
      {bookCollection.length ? (
        <OtherBooksCard author={name} books={bookCollection} />
      ) : null}
      <style jsx>{`
        .author-card-container {
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }

        .author-inline-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .author-details-container {
          width: 80%;
        }

        .author-name {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          margin-bottom: 0;
        }

        .author-bio {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          color: grey;
          margin-top: 0.3em;
        }

        .image-cropper {
          margin-top: auto;
          margin-bottom: auto;
          width: 100px;
          height: 100px;
          position: relative;
          overflow: hidden;
          border-radius: 50%;
        }
        .profile-pic {
          display: inline;
          margin: 0 auto;
          margin-left: -25%; //centers the image
          height: 100%;
          width: auto;
        }

        @media (max-width: 600px) {
          .author-inline-container {
            flex-direction: column;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          .image-cropper {
            margin-left: auto;
            margin-right: auto;
          }

          .author-details-container {
            width: 100%;
          }

          .author-name {
            text-align: center;
            margin-bottom: 1em;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthorCard;
