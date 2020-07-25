import React from "react";

import styles from "./ProductsList.module.css";

import Product from "components/Product/Product";
import { useSelector } from "react-redux";

const ProductsList = ({ products }) => {
  const isLoading = useSelector((state) => state.productsObj.isLoading);
  const isError = useSelector((state) => state.productsObj.isError);
  let productsList =
    !isLoading && !isError ? (
      <div className={styles.Products}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <p>Loading ...</p>
    );

  return productsList;
};

export default ProductsList;
