import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState({});
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);
  debugger;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {typeof backendData.users === "undefined" ? (
            <p>loading...</p>
          ) : (
            backendData.users
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
