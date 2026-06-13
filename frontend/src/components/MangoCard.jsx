function MangoCard({ mango, onAddToCart }) {
  return (
    <div className="mango-card">
      <img src={mango.image} alt={mango.name} />
      <h3>{mango.name}</h3>
      <p className="origin">{mango.origin}</p>
      <p className="description">{mango.description}</p>
      <p className="price">₹{mango.pricePerKg} / kg</p>
      <button onClick={() => onAddToCart(mango)}>Add to Cart</button>
    </div>
  );
}

export default MangoCard;
