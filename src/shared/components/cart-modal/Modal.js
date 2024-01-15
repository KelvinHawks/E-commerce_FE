import React from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
const ModalOverlay = (props) => {
  const content = (
    <div className={`modal ${props.className}`}>{props.children}</div>
  );
  return ReactDOM.createPortal(content, document.getElementById("cart-modal"));
};
function Modal(props) {
  return (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      classNames="modal"
    >
      <ModalOverlay {...props} />
    </CSSTransition>
  );
}

export default Modal;
