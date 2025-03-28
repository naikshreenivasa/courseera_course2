import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../data/products';
import { addToCart } from '../features/cart/cartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px' }}>
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px' 
          }}>
            {categoryProducts.map(product => (
              <div key={product.id} style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={isProductInCart(product.id)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: isProductInCart(product.id) ? '#ccc' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isProductInCart(product.id) ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isProductInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;