import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/common.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import store, { persistor } from "./redux/redux-store";
import { store, persistor } from "./toolkitRedux/index";
import { PersistGate } from "redux-persist/integration/react";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Global = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0px;
    border: 0px;
  },
  *,
  *:before,
  *:after {
  box-sizing: border-box;
},
html,
body {
  height: 100%;
  background-color: #dfdfdf;
},
a {
  color: inherit;
},
a:link,
a:visited {
  text-decoration: none;
},
a:hover {
  text-decoration: none;
},
ul li {
  list-style: none;
},
img {
  vertical-align: top;
},
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
},

`;

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <Global />
          <App />
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
