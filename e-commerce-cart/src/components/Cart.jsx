import React from 'react';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                  }
                >
                  -
                </button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
