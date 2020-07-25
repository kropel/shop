import React, { useMemo } from "react";
import { connect } from "react-redux";
import style from "./Bag.module.css";

import bagPng from "./assets/bag.png";

const Bag = ({ bag = {} }) => {
  const numberItems = useMemo(
    () =>
      Object.keys(bag).reduce((sum, current) => {
        return (sum += bag[current].amount);
      }, 0),
    [bag]
  );
  return (
    <span
      onClick={(e) => {
        console.log(e.target);
      }}
      className={style.Bag}
    >
      <img src={bagPng} alt="Your bag" />
      {numberItems !== 0 && <span className={style.Badge}>{numberItems}</span>}
    </span>
  );
};

const getBag = (state) => state.bagObj;

const mapStateToPrps = (state) => {
  console.log("=>Bag.js<=", getBag(state));
  return { bag: getBag(state) };
};

export default connect(mapStateToPrps)(Bag);
