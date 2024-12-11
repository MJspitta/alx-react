import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import uiReducer from "./reducers/uiReducer";
import "./index.css";
import { Provider } from "react-redux";

const store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
