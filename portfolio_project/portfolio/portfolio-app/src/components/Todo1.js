// useState() is a function that returns an array with exactly two elements.
import { useState } from "react";

import Modal1 from "./Modal1";
import Backdrop1 from "./Backdrop1";

// The first element is the current state, and the second element is a function that allows you to update the state.
// The useState() function takes one argument, which is the initial state.
const Todo1 = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // deleteHandler() is a function that will be executed when the button is clicked.
  function deleteHandler() {
    setModalIsOpen(true);
  }

  // closeModalHandler() is a function that will be executed when the button is clicked.
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <div className="btn" onClick={deleteHandler}>
          <button>Delete</button>
        </div>
        {modalIsOpen ? (
          <Modal1 onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        ) : null}
        {/* {modalIsOpen && <Modal1 />} */}
        {modalIsOpen ? <Backdrop1 onClick={closeModalHandler} /> : null}
      </div>
    </div>
  );
};

export default Todo1;

// modalIsOpen is a state variable that will be used to determine whether the modal should be visible or not.
// setModalIsOpen is a function that will be used to update the modalIsOpen state variable.
// setModalIsOpen() is a function that will be executed when the button is clicked.
// onClick={deleteHandler} is an event handler that will be executed when the button is clicked.
//onClick={props.onCancel} is an event handler that will be executed when the button is clicked.
//Ternaary operator
// {modalIsOpen ? <Modal1 /> : null} is a ternary operator that will render the Modal1 component if modalIsOpen is true, otherwise it will render null.
//backdrop1 is a component that will be used to render the backdrop.
