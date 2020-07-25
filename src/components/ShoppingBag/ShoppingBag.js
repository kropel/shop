import React from "react";

const ShoppingBag = ({ productInBag, deleteFromBag, changeAmount }) => {
  const products = productInBag.map();
  return (
    <div>
      <ol>{products}</ol>
    </div>
  );
};
