import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddCart }) => {
  const {
    stock,
    shipping,
    seller,
    ratingsCount,
    ratings,
    // quantity,
    price,
    name,
    img,
    // id,
  } = bottle;

  return (
    <div className="bottleCard">
      {/* image */}
      <div className="bottleImage">
        <img src={img} alt={name} />
      </div>

      {/* info */}
      <div className="bottleInfo">
        <h3 className="bottleName">{name}</h3>

        <p className="price">${price}</p>

        <p className="seller">Seller: {seller}</p>

        <p className="rating">
          ⭐ {ratings} ({ratingsCount} reviews)
        </p>

        <p className="stock">Stock: {stock}</p>

        <p className="shipping">Shipping: {shipping}</p>

        <button onClick={() => handleAddCart(bottle)} className="cartBtn">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Bottle;
