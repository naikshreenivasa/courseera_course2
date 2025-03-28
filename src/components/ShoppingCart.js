import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, deleteFromCart } from '../features/cart/cartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  const totalCost = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Shopping Cart ({totalQuantity} items)</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Total: ${totalCost.toFixed(2)}</h3>
      </div>

      {cartItems.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          alignItems: 'center',
          padding: '15px',
          borderBottom: '1px solid #ddd',
          gap: '20px'
        }}>
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)} each</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              style={{ padding: '5px 10px' }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(addToCart(item))}
              style={{ padding: '5px 10px' }}
            >
              +
            </button>
            <button
              onClick={() => dispatch(deleteFromCart(item.id))}
              style={{ 
                padding: '5px 10px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div style={{ 
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px' 
      }}>
        <button
          onClick={() => navigate('/products')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Continue Shopping
        </button>
        <button
          onClick={() => alert('Checkout functionality coming soon!')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;