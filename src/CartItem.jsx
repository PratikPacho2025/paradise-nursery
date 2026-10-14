
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import { Link } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCheckout() {
    window.alert("Checkout Coming Soon!");
  }

  return (
    <main className="page-container">
      <h1 className="page-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Discover beautiful plants for your home.</p>

          <Link className="primary-button" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <>
          <section className="cart-list">
            {cartItems.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>
                    Unit price: ${item.price.toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span>Quantity: {item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Item total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      dispatch(removeFromCart(item.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </section>

          <section className="cart-summary">
            <h2>
              Total: ${totalAmount.toFixed(2)}
            </h2>

            <div className="cart-actions">
              <Link className="continue-button" to="/plants">
                Continue Shopping
              </Link>

              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
