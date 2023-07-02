import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import HelloFormBack from "./components/Backend/HelloFormBack";
import Footer from "./components/Footer/Footer.jsx";
import Content from "./components/Main/Content.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper_content">
        <HelloFormBack />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
