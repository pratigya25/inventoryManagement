import React from 'react';
import logo from './inv_logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{ height: '5px' }}></div>
          <Header /> 
        </header> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
