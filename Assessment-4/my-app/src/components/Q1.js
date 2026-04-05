import React from "react";

function Welcome(props) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ color: "#333" }}>
        Welcome {props.name} from {props.city}!
      </h2>

      <p style={{ fontSize: "18px", color: "#555" }}>
        This is a simple React application demonstrating the use of props and functional components.
      </p>

      <footer>
        <p>Name: G Yeshwanth Surya</p>
        <p>Registration Number: 24BCT0041</p>
      </footer>
    </div>
  );
}

export default Welcome;