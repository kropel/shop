import React, { useState, useEffect } from "react";
import ProductInBag from "./ProductInBag/ProductInBag";
import { connect, useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import style from "./ShoppingBag.module.css";
import { hideBag } from "../../actions/showShoppingBad";

const ShoppingBag = ({ productsInBag }) => {
  const keys = Object.keys(productsInBag);
  const dispatch = useDispatch();
  const [areProducts, setAreProgucts] = useState(keys.length > 0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setAreProgucts(keys.length > 0);
    let resultSuming = keys.reduce((sum, current) => {
      return (sum +=
        productsInBag[current].product.amount * productsInBag[current].amount);
    }, 0);
    setSum(resultSuming.toFixed(2));
  }, [productsInBag]);

  let products;
  if (areProducts) {
    products = keys.map((key) => {
      return <ProductInBag {...productsInBag[key]} key={key} />;
    });
  }
  return createPortal(
    <div className={style.Bag} onClick={() => dispatch(hideBag())}>
      <div
        className={style.Wraper}
        onClick={(event) => event.stopPropagation()}
      >
        <h1>Shopping Bag</h1>
        <span className={style.Close} onClick={() => dispatch(hideBag())}>
          &#10006;
        </span>
        {areProducts && (
          <>
            <ol>{products}</ol>
            <div className={style.Sum}>
              <p>Sum: {sum} $</p>
            </div>
          </>
        )}
        {!areProducts && (
          <div>
            <h2>
              Shopping Bag &#128722;<small>is empty</small>
            </h2>
            <p>Feel free to buy something!</p>
          </div>
        )}
      </div>
    </div>,
    document.getElementById("shopping-bag")
  );
};

const getProducts = (state) => state?.bagObj || {};
const mapStateToProps = (state) => {
  return {
    productsInBag: getProducts(state),
  };
};

export default connect(mapStateToProps)(ShoppingBag);
