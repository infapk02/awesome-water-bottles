import React, { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import {
  addBottleDataToLs,
  getBottlesDataFromLS,
  removeFromLs,
} from "../../utilities/localStorage";

const Bottles = ({ bottlesData }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedBottlesId = getBottlesDataFromLS();
    const matchedBottles = [];

    for (const id of savedBottlesId) {
      const matchBottle = bottlesData.find((item) => item.id === id);
      if (matchBottle) {
        matchedBottles.push(matchBottle);
      }
    }

    setCartItems(matchedBottles);
  }, [bottlesData]);

  const handleAddCart = (bottle) => {
    const exists = cartItems.some((item) => item.id === bottle.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }

    const newCart = [...cartItems, bottle];
    setCartItems(newCart);

    addBottleDataToLs(bottle.id);
  };

  const handleRemove = (id) => {
    const remainingCart = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingCart);

    removeFromLs(id);
  };

  return (
    <>
      <h3>Bottles: {bottlesData.length}</h3>
      <h3>Cart Products: {cartItems.length}</h3>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "10px",
          gap: "10px",
        }}
      >
        {cartItems.map((item, index) => (
          <div
            style={{
              display: "flex",
            }}
            key={index}
          >
            <img
              style={{
                width: "100px",
              }}
              src={item.img}
            />
            <p
              style={{
                cursor: "pointer",
              }}
              onClick={() => handleRemove(item.id)}
            >
              x
            </p>
          </div>
        ))}
      </div>
      {/* bottles container */}
      <div className="bottlesContainer">
        {bottlesData.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
    </>
  );
};

export default Bottles;
