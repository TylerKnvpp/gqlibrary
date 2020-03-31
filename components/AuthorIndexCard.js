import Link from "next/link";

const AuthorIndexCard = props => {
  const id = props.author.id;
  const name = props.author.name;
  const bio = props.author.bio;
  const picture = props.author.picture;
  // const books = props.author.books;

  return (
    <Link href="/authors/[id]" as={`/authors/${id}`}>
      <a href="#" className="card">
        <div className="image-cropper">
          <img src={picture} alt={`Author ${name}`} className="profile-pic" />
        </div>
        <div className="copy-container">
          <h3 className="title">
            {name.length > 20 ? name.substring(0, 21).concat("...") : name}{" "}
            &rarr;
          </h3>

          <p className="summary">
            {" "}
            {bio.length > 121 ? bio.substring(0, 121).concat("...") : bio}
          </p>
        </div>
        <style jsx>{`
          .card {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            width: 100%;
          }

          .image-cropper {
            width: 200px;
            height: 200px;
            margin-top: auto;
            margin-bottom: auto;
            position: relative;
            overflow: hidden;
            border-radius: 50%;
          }
          .profile-pic {
            display: inline;
            margin: 0 auto;
            margin-left: 0%; //centers the image
            height: 100%;
            width: auto;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .title {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .author {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .copy-container {
            margin-top: auto;
            margin-bottom: auto;
            width: 51%;
          }

          .summary {
            color: grey;
            font-size: 14px;
            line-height: 1.3;
          }

          @media only screen and (max-width: 600px) {
            .card {
              flex-direction: column;
            }

            .image-cropper {
              height: 100px;
              width: 100px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 1rem;
            }

            .copy-container {
              width: 100%;
            }
          }
        `}</style>
      </a>
    </Link>
  );
};

export default AuthorIndexCard;
