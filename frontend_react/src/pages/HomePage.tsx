// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styling.css'; // Import CSS file

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={'containerStyle'}>
      <div style={{ height: '25px' }}></div>
      <div className={'summaryCardsContainer'}>
        <div className={'cardStyle'}>
          <h2>Products</h2>
          <p>25 Products Available</p>
        </div>
        <div className={'cardStyle'}>
          <h2>Sales</h2>
          <p>100 Sales Made</p>
        </div>
        <div className={'cardStyle'}>
          <h2>Low Stock Alerts</h2>
          <p>5 Products Running Low</p>
        </div>
      </div>

      <button onClick={() => navigate('/inventory')} className={'dashboardButtonStyle'}>Go to Inventory</button>
      <button onClick={() => navigate('/sales')} className={'dashboardButtonStyle'}>View Sales</button>
    </div>
  );
};

export default HomePage;
