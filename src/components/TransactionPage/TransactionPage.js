import React, { Component } from "react";
import style from "./TransactionPage.module.css";
import MainHeader from "./MainHeader";
import ShortSummery from "./ShortSummery";
import TransactionList from "./TransactionList";

class TransactionPage extends Component {
  render() {
    return (
      <div className={style.transactionPage}>
        <MainHeader />
        <ShortSummery />
        <TransactionList />
      </div>
    );
  }
}

export default TransactionPage;
