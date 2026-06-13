function OrderConfirmation({ order, onNewOrder }) {
  return (
    <div className="confirmation">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you, {order.customerName}!</p>
      <p>Total: ₹{order.totalAmount}</p>
      <p>We'll deliver fresh mangoes to: {order.address}</p>
      <button onClick={onNewOrder}>Place Another Order</button>
    </div>
  );
}

export default OrderConfirmation;
