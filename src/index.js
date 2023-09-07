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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
