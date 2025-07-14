import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function CartPage({ cart, clearCart, increaseQuantity, decreaseQuantity }) {
  const totalCarbon = cart
    .reduce((sum, item) => sum + item.carbonImpact * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-green-800 dark:text-green-300 text-xl font-bold mb-4">
          🛒 Items in Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-green-600 dark:text-green-400">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cart.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center justify-between border-b border-green-200 dark:border-green-700 pb-2 hover:bg-green-50 dark:hover:bg-gray-700 rounded-lg transition"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold text-green-800 dark:text-green-300">{item.name}</p>
                      <p className="text-green-600 dark:text-green-400 text-sm">Eco Score: {item.ecoScore} 🌿</p>
                      <p className="text-green-500 dark:text-green-300 text-sm">
                        Carbon Impact: {item.carbonImpact} kg CO₂
                      </p>
                      <p className="text-green-500 dark:text-green-300 text-sm">
                        Quantity: {item.quantity}
                      </p>
                      <div className="mt-2">
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded mx-1 transition"
                        >
                          ➕
                        </button>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded mx-1 transition"
                        >
                          ➖
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="p-4 bg-green-100 dark:bg-green-700 rounded-lg text-green-800 dark:text-green-200 font-semibold text-lg">
              🌿 Total Carbon Impact: {totalCarbon} kg CO₂
            </div>

            <button
              onClick={clearCart}
              className="mt-4 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded transition"
            >
              🗑️ Remove All Items
            </button>
          </>
        )}
      </motion.main>
    </div>
  );
}
