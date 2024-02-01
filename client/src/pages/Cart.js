import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { CartItem } from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css';


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, books } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Items In Your Cart</h1>
      </div>
      <div className="cart">
        {books.map((book) => {
          const cartItemCount = cartItems[book.id];
          if (cartItemCount !== 0) {
            return <CartItem key={book.id} data={book} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};