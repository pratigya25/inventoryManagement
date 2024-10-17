// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to="/"style={{ marginRight: '50px', textDecoration: 'none', color: 'black' }}>Dashboard</Link>
        <Link to="/inventory" style={{ textDecoration: 'none', color: 'black' }}>Inventory</Link>
      </nav>
    </header>
  );
};

export default Header;