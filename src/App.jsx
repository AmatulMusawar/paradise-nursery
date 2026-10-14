import { Navigate, useLocation } from 'react-router-dom';
import CartPage from './pages/CartPage';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';

export default function App() {
  const location = useLocation();
  const isPlants = location.pathname === '/plants';
  const isCart = location.pathname === '/cart';
  const isShop = isPlants || isCart;

  return (
    <>
      <LandingPage dimmed={isShop} />
      {isPlants && <ProductPage />}
      {isCart && <CartPage />}
      {location.pathname !== '/' && !isShop && <Navigate to="/" replace />}
    </>
  );
}
