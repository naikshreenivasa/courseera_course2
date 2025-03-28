import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page" style={{
      backgroundImage: 'url("/images/landing-bg.jpg")',
      backgroundSize: 'cover',
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