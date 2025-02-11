import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';  // För att visa en specifik produkt
import Home from './pages/Home';  // Din Home-komponent
import About from './pages/About';  // Din About-komponent
import Header from './pages/Header';
import './App.css'

const App: React.FC = () => {
  return (
    <div>
      <Header /> {/* Lägg till Header här */}
      <Routes>
        {/* Ruta för Home */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta för About */}
        <Route path="/about" element={<About />} />

        {/* Ruta för produktlistan */}
        <Route path="/products" element={<Products />} />
        
        {/* Dynamisk ruta för produktdetaljer */}
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
