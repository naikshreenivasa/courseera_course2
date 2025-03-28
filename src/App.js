import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <Router basename="/courseera_course2">
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/*" element={
              <>
                <Header />
                <Routes>
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
