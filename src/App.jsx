import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import './App.css'

export default function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="bg-green-700 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">EcoCart 🌿</h1>
                <button
                  onClick={() => navigate('/cart')}
                  className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
                >
                  View Cart ({cart.length})
                </button>
              </header>

              <ProductList addToCart={addToCart} />

              <footer className="bg-green-100 p-4 mt-6 text-center">
                <p className="text-green-800 font-semibold">Total Items in Cart: {cart.length}</p>
              </footer>
            </>
          }
        />

        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart}/>} />
      </Routes>
    </div>
  );
}
