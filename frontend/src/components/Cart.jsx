function Cart({ cartItems, onRemove, onCheckout }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.pricePerKg * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item, idx) => (
        <div key={idx} className="cart-item">
          <span>{item.name} x {item.quantity}kg</span>
          <span>₹{item.pricePerKg * item.quantity}</span>
          <button onClick={() => onRemove(idx)}>Remove</button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={onCheckout} className="checkout-btn">Checkout</button>
    </div>
  );
}

export default Cart;
