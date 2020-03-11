import OtherBooksCard from "./OtherBooksCard";

const BookCard = props => {
  //   const bookCollection = props.author.books.filter(
  //     book => book.id !== props.bookID
  //   );

  //   console.log(bookCollection);

  return (
    <div>
      <h3>Books by {props.author}</h3>
      {/* <div className="image-cropper">
        <img src={picture} alt={`Photo of ${name}`} className="profile-pic" />
      </div>
      <h4>{name}</h4>
      <p>{bio}</p>
      {bookCollection.length ? (
        <OtherBooksCard name={name} books={bookCollection} />
      ) : null} */}
      <style jsx>{`
        .image-cropper {
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
      `}</style>
    </div>
  );
};

export default BookCard;
