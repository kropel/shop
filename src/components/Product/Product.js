import React from "react";
import { store } from "store";
import { addProduct } from "actions/bag";

import Button from "components/Button/Button";
import styles from "./Product.module.css";

const Product = ({ product }) => {
  const { name, image, amount } = product;
  return (
    <div className={styles.Product}>
      <img className={styles.Image} src={image} alt={name} />
      <p className={styles.Price}>${amount}</p>
      <h3>{name}</h3>
      <Button
        onClick={() => {
          store.dispatch(addProduct(product));
        }}
      >
        Add to shopping bag
      </Button>
    </div>
  );
};

export default Product;
