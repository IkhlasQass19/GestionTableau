import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez 'Routes' et 'Route'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/AdminLogin';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminLogin />} />
        
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
