import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const clearResult = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      alert("Invalid Expression");
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
    <div className="container">
      

      <input type="text" value={result} readOnly />

      <div className="buttonContainer">
        {[
          "1",
          "2",
          "3",
          "+",
          "4",
          "5",
          "6",
          "-",
          "7",
          "8",
          "9",
          "*",
          "0",
          "C",
          "=",
          "/",
        ].map((btn, index) => (
          <button  key={index}  onClick={  btn === "C"  ? clearResult  : btn === "="  ? calculate  : () => handleClick(btn)  } className="button">
            {btn}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
