import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import style from "./App.css";
import TransactionPage from "./components/TransactionPage/TransactionPage";
import AddRecordPage from "./components/AddRecordPage";
import SettleUpPage from "./components/SettleUpPage";

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Switch>
          <Route exact path="/" component={TransactionPage} />
          <Route path="/add-record" component={AddRecordPage} />
          <Route path="/settle-up" component={SettleUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
