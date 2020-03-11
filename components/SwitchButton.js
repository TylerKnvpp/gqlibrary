const SwitchButton = props => {
  return (
    <div className="switch-container">
      <h2
        onClick={props.handleShowBooks}
        className={
          !props.showAuthors ? "switch-option-selected" : "switch-option"
        }
      >
        Books
      </h2>
      <h2
        onClick={props.handleShowAuthors}
        className={
          props.showAuthors ? "switch-option-selected" : "switch-option"
        }
      >
        Authors
      </h2>
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default SwitchButton;
