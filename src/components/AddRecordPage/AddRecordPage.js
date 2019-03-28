import React, { Component } from "react";
import style from "./AddRecordPage.module.css";
import getAvatar from "../../utils/avatarUtils";

class AddRecordPage extends Component {
  render() {
    return (
      <div className={style.addRecordPage}>
        <div className={style.userSection}>
          <div className={style.userActive}>
            <div
              className={style.avatar}
              style={{
                backgroundImage: `url(${getAvatar("mike")})`
              }}
            />
            <div className={style.userName}>Mike</div>
          </div>
          <div className={style.user}>
            <div
              className={style.avatar}
              style={{
                backgroundImage: `url(${getAvatar("mark")})`
              }}
            />
            <div className={style.userName}>Mark</div>
          </div>
        </div>
        <div className={style.amountSection}>
          <div className={style.amountWrap}>
            <div className={style.amountCaption}>Paid</div>
            <span>$</span>
            <input type="number" placeholder="0" />
          </div>
          <div className={style.titleWrap}>
            <input type="text" placeholder="Enter a Title" />
          </div>
        </div>
        <div className={style.detailSection}>
          <div className={style.tabBtnsWrap}>
            <div className={style.tabBtn}>Split Equally</div>
            <div className={style.tabBtnActive}>Split By Amount</div>
          </div>
          <div className={style.inputGroup}>
            <div className={style.inputWrap}>
              <label>Mark spent</label>
              <input type="number" />
            </div>
            <div className={style.inputWrap}>
              <label>Mike spent</label>
              <input type="number" />
            </div>
            <div className={style.inputWrap}>
              <label>Date</label>
              <input type="number" placeholder="2019/3/28" />
            </div>
          </div>
          <div className={style.hintText}>
            All unpaid records will be cleared after settle up.
          </div>
        </div>
        <div className={style.bottomWrap}>
          <div className={style.submitBtn}>Add Record</div>
        </div>
      </div>
    );
  }
}

export default AddRecordPage;
