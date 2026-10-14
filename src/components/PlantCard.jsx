import { useCart } from '../context/CartContext';

export default function PlantCard({ plant }) {
  const { addToCart, isInCart } = useCart();
  const added = isInCart(plant.id);

  return (
    <article className="plant-card">
      <span className="sale-badge">SALE</span>
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} />
      <p className="plant-price">${plant.price}</p>
      <p className="plant-description">{plant.description}</p>
      <button
        type="button"
        className="btn add-btn"
        disabled={added}
        onClick={() => addToCart(plant)}
      >
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </article>
  );
}
