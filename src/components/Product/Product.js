import React from "react";
import Button from "components/Button/Button";

import styles from "./Product.module.css";

const Product = ({ name, image, amount }) => (
  <div className={styles.Product}>
    <img className={styles.Image} src={image} alt={name} />
    <p className={styles.Price}>${amount}</p>
    <h3>{name}</h3>
    <Button>Add to shopping bag</Button>
  </div>
);

export default Product;
