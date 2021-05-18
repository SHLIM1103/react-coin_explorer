import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import InnerBtn from "./InnerBtn";
import CoinMkt from "../Screens/CoinMkt";
import CoinExch from "../Screens/CoinExch";

export default ({ id }) => {
  return (
    <Router>
      <InnerBtn id={id} />
      <Route path="/coins/:id/markets" component={CoinMkt} />
      <Route path="/coins/:id/exchanges" component={CoinExch} />
    </Router>
  );
};
