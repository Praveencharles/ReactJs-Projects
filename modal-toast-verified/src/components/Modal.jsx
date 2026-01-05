import React from "react";
import "./Modal.css";

const Modal = ({onSubmit,onCancel,onClose,children}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={()=>{onClose("Modal has been closed",1)}}>&times;</p>
          <hr />
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <hr />
          <div className="btn-container">
            <button className="btn btn-submit" onClick={()=>{onSubmit("Modal has been submited",2)}}>Submit</button>
            <button className="btn btn-cancel" onClick={()=>{onCancel("Modal has been canceled",3)}}>Cancel</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Modal;
