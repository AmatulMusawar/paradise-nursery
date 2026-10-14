import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const navigate = useNavigate();
  const {
    items,
    totalAmount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const [notice, setNotice] = useState('');

  const handleCheckout = () => {
    if (items.length === 0) {
      setNotice('Your cart is empty. Add a plant before checking out.');
      return;
    }
    clearCart();
    setNotice('Thank you for your order. Your plants are on their way.');
  };

  return (
    <div className="shop-shell">
      <Header />
      <main className="shop-main cart-page">
        <p className="cart-total">Total Cart Amount: ${totalAmount}</p>

        {items.length > 0 && (
          <div className="cart-panel">
            {items.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">${item.price}</p>
                  <div className="qty-row">
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity <= 1}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="line-total">
                    Total: ${item.price * item.quantity}
                  </p>
                  <button
                    type="button"
                    className="btn delete-btn"
                    onClick={() => {
                      removeFromCart(item.id);
                      setNotice('');
                    }}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {notice && (
          <p className="cart-notice" role="status">
            {notice}
          </p>
        )}

        <div className="cart-actions">
          <button
            type="button"
            className="btn action-btn"
            onClick={() => navigate('/plants')}
          >
            Continue Shopping
          </button>
          <button type="button" className="btn action-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}
