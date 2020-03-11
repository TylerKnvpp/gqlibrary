import Link from "next/link";

const Header = () => {
  return (
    <header className="nav-bar">
      <Link href="/">
        <a href="#">
          <h1>GQLibrary</h1>
        </a>
      </Link>
      <style jsx>{`
        .nav-bar {
          background-color: #0c5fc1;
          padding-top: 1em;
          padding-bottom: 1em;
          box-shadow: 1px 3px 5px #d3d0d0;
          margin-bottom: 2em;
        }

        a {
          text-decoration: none;
        }

        a:hover {
          color: #0c5fc1;
        }

        h1 {
          margin-top: 0;
          margin-bottom: 0;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          text-align: center;
          color: #fff;
        }
      `}</style>
    </header>
  );
};

export default Header;
