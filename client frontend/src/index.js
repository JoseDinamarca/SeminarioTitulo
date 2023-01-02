import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faCarSide, faClock, faLocationDot, faCartShopping, faUser, faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faCheckSquare, faCoffee, faCarSide, fab, faClock, faLocationDot, faCartShopping, faUser, faSquarePhone)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
