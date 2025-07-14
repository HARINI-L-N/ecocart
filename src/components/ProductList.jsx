import { useState } from 'react';
import { products } from '../data/products';
import AlternativeSuggestion from './AlternativeSuggestion';
import Navbar from '../components/Navbar';

export default function ProductList({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border border-green-300 rounded w-full"
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
  key={product.id}
  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col items-center text-center"
>

            <img
  src={product.image}
  alt={product.name}
  className="rounded-xl mb-4 w-32 h-32 object-cover"
/>

            <h2 className="text-xl font-bold text-green-800">{product.name}</h2>
            <p className="text-green-700">Eco Score: {product.ecoScore} 🌿</p>
            <p className="text-gray-600">
              Carbon Impact: {product.carbonImpact} kg CO₂
            </p>
            <button
  onClick={() => addToCart(product)}
  className="mt-3 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-full transition-colors"
>
  ➕ Add to Cart
</button>


            <AlternativeSuggestion product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
