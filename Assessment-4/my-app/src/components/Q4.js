import React, { useState } from "react";
import "./Q4.css";

function Q4() {
  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");
  const [average, setAverage] = useState(0);
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    const m1 = Number(mark1);
    const m2 = Number(mark2);
    const m3 = Number(mark3);

    const avg = (m1 + m2 + m3) / 3;
    setAverage(avg.toFixed(2));

    // Grade calculation using if-else
    if (avg >= 90) {
      setGrade("A+");
    } else if (avg >= 75) {
      setGrade("A");
    } else if (avg >= 60) {
      setGrade("B");
    } else if (avg >= 50) {
      setGrade("C");
    } else {
      setGrade("F");
    }
  };

  return (
    <div className="grade-container">
      <h2>Grade Calculator</h2>

      <input
        type="number"
        placeholder="Enter Subject 1 Marks"
        value={mark1}
        onChange={(e) => setMark1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Subject 2 Marks"
        value={mark2}
        onChange={(e) => setMark2(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Subject 3 Marks"
        value={mark3}
        onChange={(e) => setMark3(e.target.value)}
      />

      <button onClick={calculateGrade}>Calculate Grade</button>

      <h3>Average: {average}</h3>
      <h3>Grade: {grade}</h3>

      <footer>
        <p>Name: G Yeshwanth Surya</p>
        <p>Registration Number: 24BCT0041</p>
      </footer>
    </div>
  );
}

export default Q4;