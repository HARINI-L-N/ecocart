import { motion } from 'framer-motion';

export default function Cart({ cart, onClose }) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-80 h-full bg-white dark:bg-gray-800 shadow-lg z-50 p-4 overflow-y-auto transition-colors duration-300"
    >
      <button
        onClick={onClose}
        className="text-green-800 dark:text-green-300 font-bold mb-4 hover:underline"
      >
        ✖️ Close Cart
      </button>
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-green-600 dark:text-green-400">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 border-b border-green-200 dark:border-green-700 pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded object-cover"
              />
              <div>
                <p className="font-semibold text-green-800 dark:text-green-300">{item.name}</p>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Eco Score: {item.ecoScore} 🌿
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
