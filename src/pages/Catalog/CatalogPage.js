import React, { useState, useEffect } from "react";

import HeaderBig from "components/Header/HeaderBig";
import ProductsList from "components/ProductsList/ProductsList";

import ProductService from "services/ProductService";

import styles from "./CatalogPage.module.css";
import Filters from "./components/Filters/Filters";

const CatalogPage = () => {
  const [products, setProducts] = useState(ProductService.getProducts());
  const [filter, setFilter] = useState({
    text: "",
    manufacture: "All"
  });

  useEffect(() => {
    const filteredProducts = ProductService.getProductsByFilter({
      name: filter.text,
      manufacture: filter.manufacture === "All" ? null : filter.manufacture
    });

    setProducts(filteredProducts);
  }, [filter]);

  const manufacturers = ["All", ...ProductService.getManufactures()];

  const handleFilterChange = filters => {
    setFilter(filters);
  };

  return (
    <>
      <HeaderBig>Catalog</HeaderBig>

      <div className={styles.Catalog}>
        <div className={styles.ColumnLeft}>
          <Filters
            values={filter}
            onChange={handleFilterChange}
            manufacturers={manufacturers}
          />
        </div>

        <div className={styles.ColumnRight}>
          <ProductsList products={products} />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
