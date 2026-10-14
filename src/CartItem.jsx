import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
} from './CartSlice';
import Navbar from './Navbar';

export default function CartItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);
  const [notice, setNotice] = useState('');

  return (
    <div className="shop-shell">
      <Navbar />
      <main className="shop-main cart-page">
        <p className="cart-total">Total Plants: {totalQuantity}</p>
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
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="line-total">Total: ${item.price * item.quantity}</p>
                  <button
                    type="button"
                    className="btn delete-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
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
          <button
            type="button"
            className="btn action-btn"
            onClick={() => setNotice('Coming Soon')}
          >
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}
