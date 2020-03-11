const SwitchButton = props => {
  return (
    <div className="switch-container">
      <a href="#">
        <h2
          onClick={props.handleShowBooks}
          className={
            !props.showAuthors ? "switch-option-selected" : "switch-option"
          }
        >
          Books
        </h2>
      </a>

      <a href="#">
        <h2
          onClick={props.handleShowAuthors}
          className={
            props.showAuthors ? "switch-option-selected" : "switch-option"
          }
        >
          Authors
        </h2>
      </a>
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
        }

        .switch-container {
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

export default SwitchButton;
