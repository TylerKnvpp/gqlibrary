import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a href="#">
          <h1>GQLibrary</h1>
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }

        a:hover {
          color: #0c5fc1;
        }

        h1 {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          text-align: center;
          color: #0070f3;
        }
      `}</style>
    </header>
  );
};

export default Header;
