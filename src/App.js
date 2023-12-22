import React from "react";
import "./styles.css";



function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? <span role="img" aria-label="happy">🤠</span> : <span role="img" aria-label="sad">😞</span>}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Smiley isHappy={true} />
    </div>
  );
}
