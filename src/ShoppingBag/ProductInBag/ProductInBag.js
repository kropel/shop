import React, { useState } from "react";

const ProductInBag = ({
  productInBag: { product, amount: amountInStore },
  deleteFromBag,
  changeAmount,
}) => {
  const [amount, setAmount] = useState(amountInStore);
  const [price, setPrice] = useState(amountInStore * product.amount);

  return (
    <li>
      <img src={product.image} style="max-height: 50px; max-width: 50px" />
      <span className="name">{product.name}</span>
      <span className="amont">
        <button className="decrement">-</button>
        {amount}
        <button>+</button>
      </span>
      <span className="price">{price}</span>
    </li>
  );
};

export default ProductInBag;
