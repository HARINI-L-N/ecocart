import { useState } from 'react';
import { products } from '../data/products';
import AlternativeSuggestion from './AlternativeSuggestion';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-green-300 rounded w-full dark:bg-gray-900 dark:text-white"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: product.id * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 w-32 h-32 object-cover"
            />

            <h2 className="text-xl font-bold text-green-800 dark:text-green-300">{product.name}</h2>
            <p className="text-green-700 dark:text-green-400">Eco Score: {product.ecoScore} 🌿</p>
            <p className="text-gray-600 dark:text-gray-300">
              Carbon Impact: {product.carbonImpact} kg CO₂
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full transition-all"
            >
              ➕ Add to Cart
            </button>

            <AlternativeSuggestion product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
