import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=1920&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlend: 'overlay',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1>GreenThumb Haven</h1>
      <p>
        Welcome to GreenThumb Haven, your premier destination for beautiful and healthy houseplants. 
        We carefully select and nurture each plant to ensure you receive the highest quality additions 
        to your indoor garden. Transform your space into a natural sanctuary with our diverse collection 
        of plants.
      </p>
      <button 
        onClick={() => navigate('/products')}
        style={{
          padding: '10px 20px',
          fontSize: '1.2rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;