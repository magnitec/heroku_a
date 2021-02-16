import React from "react";
import "./App.css";

const headerURL =
  process.env.NODE_ENV === "production"
    ? "/header"
    : "http://localhost:3001/header";

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          const response = await fetch(headerURL);
          const text = await response.text();
          console.log(text);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
