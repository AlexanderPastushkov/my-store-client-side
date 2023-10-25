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
import { Global } from "./components/StyledComponents/Global";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
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
  </ApolloProvider>
);
