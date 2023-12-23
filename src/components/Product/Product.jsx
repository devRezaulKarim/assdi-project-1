/* eslint-disable react/prop-types */
import { MdAddShoppingCart } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

export default function Product({ product }) {
  const { price, category, thumbnail, title, description } = product;

  return (
    <>
      <div className="productCard">
        <div className="productImg">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="productInfo">
          <h4>{title}</h4>
          <h6>{category}</h6>
          <h5>{price}</h5>
        </div>
      </div>
    </>
  );
}
