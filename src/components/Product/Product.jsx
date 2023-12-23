/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
  MdShoppingCartCheckout,
} from "react-icons/md";

export default function Product({ product }) {
  const { price, category, thumbnail, title, description } = product;
  const [isAdded, setIsAdded] = useState(false);
  const [isMouseIn, setIsMouseIn] = useState(false);

  return (
    <>
      <div className="productCard">
        <div className="productImg">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="productInfo">
          <div className={`cartBtns ${isAdded && "true"}`}>
            <div className="addToCart">
              <div className="cardTitle">
                <h4>{title.slice(0, 20)}</h4>
                <h5> ${price}</h5>
              </div>
              <div onClick={() => setIsAdded(true)} className="addBtn">
                <MdOutlineAddShoppingCart />
              </div>
            </div>
            <div className="removeFromCart">
              <div onClick={() => setIsAdded(false)} className="removeBtn">
                <MdOutlineRemoveShoppingCart />
              </div>
              <h4 className="addedText">Added to cart</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
