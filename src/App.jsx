import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import './App.css'
import TipsPage from './components/TipsPage';


export default function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // If product is already in cart, increase quantity
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };
  
  

  const clearCart = () => {
    setCart([]);
  };
  

  return (
    <div className="min-h-screen bg-green-50">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <header className="bg-green-700 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">EcoCart 🌿</h1>
                <button
                  onClick={() => navigate('/cart')}
                  className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
                >
                  View Cart ({cart.length})
                </button>
              </header> */}

              <ProductList addToCart={addToCart} />

              <footer className="bg-green-100 p-4 mt-6 text-center">
                <p className="text-green-800 font-semibold">Total Items in Cart: {cart.length}</p>
              </footer>
            </>
          }
        />

        <Route path="/cart" element={<CartPage cart={cart} clearCart={clearCart} setCart={setCart} increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}/>} />
        <Route path="/tips" element={<TipsPage />} />

      </Routes>
    </div>
  );
}
