import React, { FunctionComponent, ReactNode } from "react";
import "./Modal.scss";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

const Modal = ({ active, setActive, children }: Props) => {
  if (active) {
    document.body.style.overflow = "hidden";
  }
  const closeModal = () => {
    document.body.style.overflow = "";
    setActive(false);
  };

  return (
    <>
      <div className="bg"></div>
      <div className={active ? "modal active" : ""} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
