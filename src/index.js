import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
