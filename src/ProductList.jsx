import { useDispatch, useSelector } from 'react-redux';
import { categories } from './data/plants';
import { addToCart, selectCartItems, selectTotalQuantity } from './CartSlice';
import Navbar from './Navbar';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="shop-shell">
      <Navbar />
      <main className="shop-main">
        <p className="cart-quantity">Cart quantity: {totalQuantity}</p>
        {categories.map((category) => (
          <section key={category.id} className="category" aria-labelledby={category.id}>
            <h2 id={category.id}>{category.name}</h2>
            <div className="plant-grid">
              {category.plants.map((plant) => {
                const added = cartItems.some((item) => item.id === plant.id);
                return (
                  <article key={plant.id} className="plant-card">
                    <span className="sale-badge">SALE</span>
                    <h3>{plant.name}</h3>
                    <img src={plant.image} alt={plant.name} />
                    <p className="plant-price">${plant.price}</p>
                    <p className="plant-description">{plant.description}</p>
                    <button
                      type="button"
                      className="btn add-btn"
                      disabled={added}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
