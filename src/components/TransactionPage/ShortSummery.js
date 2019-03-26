import React, { Component } from "react";
import style from "./ShortSummery.module.css";

class ShortSummery extends Component {
  render() {
    return (
      <div className={style.shortSummery}>
        <div className={style.text}>Mike paid total $240, owes $2,540.</div>
        <div className={style.text}>Mark paid total $5,020, owes $380.</div>
      </div>
    );
  }
}

export default ShortSummery;
