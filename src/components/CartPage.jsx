import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function CartPage({ cart, clearCart, increaseQuantity, decreaseQuantity }) {
  // Calculate total carbon impact
  const totalCarbon = cart
    .reduce((sum, item) => sum + item.carbonImpact * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <Navbar />

      <main className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-green-800 text-xl font-bold mb-4">🛒 Items in Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-green-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <li
  key={index}
  className="flex items-center justify-between border-b border-green-200 pb-2 hover:bg-green-50 rounded-lg transition"
>

                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                    <div>
                      <p className="font-semibold text-green-800">{item.name}</p>
                      <p className="text-green-600 text-sm">Eco Score: {item.ecoScore} 🌿</p>
                      <p className="text-green-500 text-sm">Carbon Impact: {item.carbonImpact} kg CO₂</p>
                      <p className="text-green-500 text-sm">Quantity: {item.quantity}</p>

                      {/* Quantity buttons */}
                      <div className="mt-2">
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-green-600 text-white px-2 py-1 rounded mx-1"
                        >
                          ➕
                        </button>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-green-600 text-white px-2 py-1 rounded mx-1"
                        >
                          ➖
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-green-100 rounded-lg text-green-800 font-semibold text-lg">
              🌿 Total Carbon Impact: {totalCarbon} kg CO₂
            </div>

            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
            >
              🗑️ Remove All Items
            </button>
          </>
        )}
      </main>
    </div>
  );
}
