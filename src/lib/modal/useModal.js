import { useState } from "react";

const useModal = (animate) => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [classModifier, setClassModifier] = useState(animate);

  const hide = async () => {
    setClassModifier("close" + animate);
    await new Promise((r) => setTimeout(r, 300));
    setModalIsActive(false);
    document.body.removeAttribute("style");
   // console.log("animation type is: " + animate);
  };

  const show = () => {
    setModalIsActive(true);
    setClassModifier("open" + animate);
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
  };

  function toggleModal() {
    if (modalIsActive) {
      hide();
    } else {
      show();
    }
  }

  return {
    modalIsActive,
    toggleModal,
    classModifier,
  };
};

export default useModal;