import React from "react";
import "./modal.css";

const Modal = ({ show, close, data }) => {
  return (
    <>
      {show && (
        <div className="modal-container">
          <i class="bx bxs-x-circle modal__close" onClick={close}></i>
          <div className="modal-container__main">
            <div className="modal__title">{data.title}</div>
            <div className="modal__description">{data.description}</div>
            <div className="modal__icon">
              <a href={data.github} target="_blank">
                <i className="bx bxl-github modal_i" ></i>
              </a>
              <a href={data.link} target="_blank">
                <i className="bx bxl-netlify modal_i"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
