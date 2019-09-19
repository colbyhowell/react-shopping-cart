import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <ProductContext>
    <CartContext>
      <Router>
        <AppWithRouter />
      </Router>
    </CartContext>
  </ProductContext>,
  document.getElementById("root")
);
