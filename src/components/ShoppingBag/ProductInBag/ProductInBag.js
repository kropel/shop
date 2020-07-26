import React, { useState, useEffect } from "react";
import style from "./ProductInBag.module.css";
import { useDispatch } from "react-redux";
import * as actions from "actions/bag/index";

const ProductInBag = ({ product, amount }) => {
  const { id, name, image, amount: itemPrice } = product;
  const [price, setPrice] = useState(itemPrice * amount);
  const dispatch = useDispatch();

  useEffect(() => {
    setPrice(itemPrice * amount);
  }, [amount]);

  return (
    <li>
      <img
        src={image}
        style={{ maxHeight: "100px", maxWidth: "100px" }}
        alt={name}
      />
      <span className={style.Name}>{name}</span>
      <span className={style.Amount}>
        <span
          className={style.Button}
          onClick={() => dispatch(actions.decrentAmount(id))}
        >
          &#10134;
        </span>
        {amount} psc
        <span
          className={style.Button}
          onClick={() => dispatch(actions.incrementAmount(id))}
        >
          &#10133;
        </span>
      </span>
      <span className={style.Price}>Price: {price.toFixed(2)} $</span>
      <span
        className={style.Delete}
        onClick={() => dispatch(actions.removeProduct(id))}
      >
        &#10008;
      </span>
    </li>
  );
};

export default ProductInBag;
