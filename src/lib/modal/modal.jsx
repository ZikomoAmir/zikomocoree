import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {

  const {isOpen,title,handleOpen} = props
  const [classModifier, setClassModifier] = useState('openbottom');


  const hide = async () => {
    setClassModifier("closebottom");
    await new Promise((r) => setTimeout(r, 300));
    document.body.removeAttribute("style");
   // console.log("animation type is: " + animate);
  };

  const show = () => {
    setClassModifier("openbottom");
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  };

 const closeModal=()=>  handleOpen(false)

  const toggleModal=()=> {
    if (!isOpen) {
      hide();
    } else {
      show();
    }
  }

  useEffect(()=>{
    toggleModal()
  },[isOpen])

  /*testing*/
  const modalRef = useRef("null");
  //const modalCloseButtonRef = useRef("null");

  if (isOpen) {
    const handleClick = (e) => {
      e.stopPropagation();
      if (!modalRef.current.contains(e.target)) {
        closeModal()
      }
    };

    const handleKeyDown = (e) => {
      e.stopPropagation();
      if (e.key === "Escape") {
        if (!modalRef.current.contains(e.target)) {
          closeModal()
        }
      }
    };

    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="underlay"></div>
          <div
            className={`modal ${classModifier}`}
            aria-modal
            aria-hidden
            tabIndex="0"
            role="dialog"
            onKeyDown={handleKeyDown}
            id={props.id}
            onClick={handleClick}
          >
            <div className="modal__content" ref={modalRef}>
              <div className="modal__header modal__header--default">
                <h4>{title}</h4>
                <button
                  type="button"
                  className="btn btn--transparent btn--close"
                  data-dismiss="modal"
                  aria-label="Close"
                  //ref={modalCloseButtonRef}
                  tabIndex="0"
                  onClick={closeModal}
                >
                  <svg className="icon icon--sm">
                    <use xlinkHref="/icons.svg#cross"></use>
                  </svg>
                </button>
              </div>
              {props.children}
            </div>
          </div>
      </React.Fragment>,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal