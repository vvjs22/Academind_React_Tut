const Modal1 = (props) => {
  const cancelHandler = () => {
    console.log("Cancel");
    props.onCancel();
  };

  const confirmHandler = () => {
    console.log("Confirm");
    props.onConfirm();
  };

  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
      {/* <button className="btn" onClick={props.onConfirm}>
        Confirm
      </button> */}
    </div>
  );
};

export default Modal1;
