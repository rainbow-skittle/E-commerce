import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
  return (
    <>
      {cart.length > 0
        ? cart.map((item) => (
            <div key={item.id} className="Cartdata">
              <img src={`images/${item.image}`} alt={item.title} />
              <div>
                <h3 className="cartTitle">{item.title}</h3>
                <p className="cartDesc">{item.description}</p>
                <p className="cartQuan">Quantity: {item.quantity}</p>
                <p className="cartPrice">Price: {item.price}</p>
                <Link to="/Buy">
                  <button className="buybtn">Buy Now</button>
                </Link>
              </div>
            </div>
          ))
        : alert("Your Cart is empty")}
    </>
  );
}
