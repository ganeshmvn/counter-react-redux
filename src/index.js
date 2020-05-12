import React from "react";
import ReactDOM from "react-dom";

import store from "./store";
import { Provider } from "react-redux";
import Counter from "./containers/Counter";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);
