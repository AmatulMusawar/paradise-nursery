import { useEffect, useRef } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import CartItem from './CartItem';
import ProductList from './ProductList';
import './App.css';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const landingRef = useRef(null);
  const isPlants = location.pathname === '/plants';
  const isCart = location.pathname === '/cart';
  const isShop = isPlants || isCart;

  useEffect(() => {
    const landing = landingRef.current;
    if (!landing) return;
    if (isShop) landing.setAttribute('inert', '');
    else landing.removeAttribute('inert');
  }, [isShop]);

  return (
    <>
      <section
        ref={landingRef}
        className={`landing${isShop ? ' landing-dimmed' : ''}`}
        aria-hidden={isShop || undefined}
      >
        <div className="landing-overlay" />
        <div className="landing-content">
          <div className="landing-intro">
            <h1>
              <span>Welcome To</span>
              Paradise Nursery
            </h1>
            <hr className="landing-rule" />
            <p className="landing-tagline">Where Green Meets Serenity</p>
            <button
              type="button"
              className="btn get-started"
              tabIndex={isShop ? -1 : 0}
              onClick={() => navigate('/plants')}
            >
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      </section>

      {isPlants && <ProductList />}
      {isCart && <CartItem />}
      {location.pathname !== '/' && !isShop && <Navigate to="/" replace />}
    </>
  );
}
