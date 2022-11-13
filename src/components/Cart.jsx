import React from "react";
import axios from 'axios'
import "./Cart.css";
const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const totalprice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:8080?api/payment/orders";
      const {data} = await axios.post(orderUrl, totalprice);
      console.log(data);
    } catch (error){
      console.log(error);
    }
  };
  return (
    <div className="cart_items">
      <div className="cart_items_header">Cart Items</div>
      {cartItems.length === 0 && <div className="noitem">No Item In Cart</div>}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart_items_list">
            <img
              src={item.images.img1}
              alt={item.name}
              className="cart_items_image"
            />
            <div className="cart_items_name">{item.name}</div>
            <div className="cart_items_function">
              <button
                className="cart_items_add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart_items_remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart_items_price">
              {item.quantity} X {item.currency}
              {item.price}
            </div>
          </div>
        ))}
        <div className="cart_items_price_name">
          Total Price
          <div className="cart_items_total_price">₹{totalprice}</div>
          <div className="checkout">
            {cartItems.length != 0 && (
              <button className="checkoutbtn" onClick={handlePayment}>
                Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
