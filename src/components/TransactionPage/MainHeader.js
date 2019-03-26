import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./MainHeader.module.css";
import getAvatar from "../../utils/avatarUtils";

class MainHeader extends Component {
  render() {
    return (
      <div className={style.mainHeader}>
        <div className={style.headline}>
          <div
            className={style.avatar}
            style={{
              backgroundImage: `url(${getAvatar("mike")})`
            }}
          />
          <div className={style.content}>
            <div className={style.title}>Mike owes</div>
            <div className={style.price}>$1,256</div>
          </div>
        </div>
        <div className={style.btnWrap}>
          <Link to="/settle-up" className={style.btnSettleUp}>
            Settle Up
          </Link>
          <Link to="/add-record" className={style.btnAddRecord}>
            Add Record
          </Link>
        </div>
      </div>
    );
  }
}

export default MainHeader;
