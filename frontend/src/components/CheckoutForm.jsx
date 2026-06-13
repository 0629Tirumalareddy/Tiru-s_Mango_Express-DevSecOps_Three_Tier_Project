import { useState } from 'react';

function CheckoutForm({ cartItems, onSubmit, onCancel }) {
  const [form, setForm] = useState({ customerName: '', phone: '', address: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = cartItems.reduce(
      (sum, item) => sum + item.pricePerKg * item.quantity,
      0
    );
    onSubmit({
      ...form,
      items: cartItems.map(item => ({
        mangoId: item._id,
        name: item.name,
        quantity: item.quantity,
        pricePerKg: item.pricePerKg
      })),
      totalAmount
    });
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input name="customerName" placeholder="Full Name" value={form.customerName} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <textarea name="address" placeholder="Delivery Address" value={form.address} onChange={handleChange} required />
        <div className="form-buttons">
          <button type="submit">Place Order</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
