import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modalopen, setModalopen] = useState(false);
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState(false);
  const [number,setNumber] = useState(1);

  const handleClick = (value,num) => {
    setModalopen(false);
    setMessage(value);
    setPopup(true);
    setNumber(num);
  };

  return (
    <div className="App">
      {modalopen && (
        <Modal
          onClose={handleClick}
          onSubmit={handleClick}
          onCancel={handleClick}
        >
          <h1>Modal Heading!</h1>
          <p>This the modal context</p>
        </Modal>
      )}
      {popup && (
        <div className={number === 2 ? "popup submitted" : number === 3 ? "popup canceled" : "popup closed" }>
          {message}
          <p className="close" onClick={()=>{setPopup(false)}}>
            &times;
          </p>
        </div>
      )}

      <div className="modal-msg">
        <button
          onClick={() => {
            setModalopen(!modalopen), setPopup(false);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default App;
