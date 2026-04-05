import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  // State variables (controlled components)
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  // Addition
  const handleAdd = () => {
    setResult(Number(num1) + Number(num2)); // Type conversion
  };

  // Subtraction
  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div className="calc-container">
      <h2>Basic Calculator</h2>

      {/* Input Fields */}
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)} // onChange event
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      {/* Buttons */}
      <div className="btn-group">
        <button onClick={handleAdd}>Add (+)</button>
        <button onClick={handleSubtract}>Subtract (-)</button>
      </div>

      {/* Result */}
      <h3>Result: {result}</h3>

      <footer>
        <p>Name: G Yeshwanth Surya</p>
        <p>Registration Number: 24BCT0041</p>
      </footer>
    </div>
  );
}

export default Calculator;