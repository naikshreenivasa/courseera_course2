import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
        <h1>GreenThumb Haven</h1>
      </Link>
      <nav>
        <Link to="/products" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>
          Products
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', position: 'relative' }}>
          🛒 Cart
          {cartQuantity > 0 && (
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '12px'
            }}>
              {cartQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;