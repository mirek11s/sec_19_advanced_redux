import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import "./index.css";
import App from "./App";

//by importing store and then adding it to the redux Provider, we add the store to the entire app.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
