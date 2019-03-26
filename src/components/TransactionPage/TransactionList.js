import React, { Component } from "react";
import style from "./TransactionList.module.css";
import getAvatar from "../../utils/avatarUtils";

const TransactionItem = ({
  title,
  date,
  totalPrice,
  splitType,
  paidBy = {},
  owedBy = {}
}) => {
  let summery = `Paid by ${paidBy.name}, `;
  switch (splitType) {
    case "equal":
      summery += `$${totalPrice.toLocaleString()} split equally.`;
      break;
    case "amount":
      summery += `spend $${paidBy.amount.toLocaleString()} of $${totalPrice.toLocaleString()}.`;
      break;
    default:
  }

  return (
    <li>
      <div className={style.transacItem}>
        <div
          className={style.avatar}
          style={{
            backgroundImage: `url(${getAvatar(owedBy.name)})`
          }}
        />
        <div className={style.info}>
          <div className={style.title}>{title}</div>
          <div className={style.desc}>{date}</div>
          <div className={style.desc}>{summery}</div>
        </div>
        <div className={style.price}>- ${owedBy.amount.toLocaleString()}</div>
      </div>
    </li>
  );
};

const mock = {
  title: "早餐",
  date: "3/23 Sat.",
  totalPrice: 2400,
  splitType: "equal",
  paidBy: {
    name: "Mike",
    amount: 1200
  },
  owedBy: {
    name: "Mark",
    amount: 1200
  }
};

const mock2 = {
  title: "飲料",
  date: "3/24 Sat.",
  totalPrice: 230,
  splitType: "amount",
  paidBy: {
    name: "Mark",
    amount: 100
  },
  owedBy: {
    name: "Mike",
    amount: 130
  }
};

const TransactionList = () => {
  return (
    <ul className={style.transactionList}>
      <TransactionItem {...mock} />
      <TransactionItem {...mock2} />
      <TransactionItem {...mock} />
      <TransactionItem {...mock} />
      <TransactionItem {...mock2} />
      <TransactionItem {...mock} />
      <TransactionItem {...mock} />
      <TransactionItem {...mock2} />
      <TransactionItem {...mock} />
    </ul>
  );
};

export default TransactionList;
