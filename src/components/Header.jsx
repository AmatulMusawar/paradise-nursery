import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <span className="brand-logo" aria-hidden="true">
          <svg viewBox="0 0 64 64" width="46" height="46">
            <circle cx="32" cy="32" r="30" fill="#ffffff" />
            <path
              d="M32 48 V30"
              stroke="#4CAF50"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M32 36c0-8-12-10-14-4 6 1 12 4 14 4z"
              fill="#43A047"
            />
            <path
              d="M32 32c0-10 14-12 16-4-8 1-14 4-16 4z"
              fill="#66BB6A"
            />
          </svg>
        </span>
        <span className="brand-text">
          <span className="brand-name">Paradise Nursery</span>
          <span className="brand-tagline">Where Green Meets Serenity</span>
        </span>
      </Link>

      <Link to="/plants" className="plants-link">
        Plants
      </Link>

      <Link
        to="/cart"
        className="cart-link"
        aria-label={`Shopping cart, ${totalItems} item${totalItems === 1 ? '' : 's'}`}
      >
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
          <path
            d="M6 6h15l-1.5 9h-12z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M6 6 L5 3 H2"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="9" cy="20" r="1.4" fill="#ffffff" />
          <circle cx="18" cy="20" r="1.4" fill="#ffffff" />
        </svg>
        <span className="cart-count">{totalItems}</span>
      </Link>
    </header>
  );
}
