import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MangoCard from './components/MangoCard';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import OrderConfirmation from './components/OrderConfirmation';
import { getMangoes, placeOrder } from './api';
import './App.css';

function App() {
  const [mangoes, setMangoes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    getMangoes()
      .then(res => setMangoes(res.data))
      .catch(err => console.error('Error fetching mangoes:', err));
  }, []);

  const handleAddToCart = (mango) => {
    const existing = cartItems.find(item => item._id === mango._id);
    if (existing) {
      setCartItems(cartItems.map(item =>
        item._id === mango._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...mango, quantity: 1 }]);
    }
  };

  const handleRemove = (idx) => {
    setCartItems(cartItems.filter((_, i) => i !== idx));
  };

  const handleCheckout = () => setShowCheckout(true);

  const handleOrderSubmit = async (orderData) => {
    try {
      const res = await placeOrder(orderData);
      setConfirmedOrder(res.data);
      setCartItems([]);
      setShowCheckout(false);
    } catch (err) {
      console.error('Error placing order:', err);
      alert('Failed to place order. Please try again.');
    }
  };

  const handleNewOrder = () => setConfirmedOrder(null);

  if (confirmedOrder) {
    return <OrderConfirmation order={confirmedOrder} onNewOrder={handleNewOrder} />;
  }

  if (showCheckout) {
    return (
      <CheckoutForm
        cartItems={cartItems}
        onSubmit={handleOrderSubmit}
        onCancel={() => setShowCheckout(false)}
      />
    );
  }

  return (
    <div className="app">
      <Hero />
      <div className="main-content">
        <div className="mango-grid">
          {mangoes.map(mango => (
            <MangoCard key={mango._id} mango={mango} onAddToCart={handleAddToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} onRemove={handleRemove} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}

export default App;
