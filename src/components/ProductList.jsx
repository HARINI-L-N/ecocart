import { products } from '../data/products';
import AlternativeSuggestion from './AlternativeSuggestion';
export default function ProductList({ addToCart }) {
  return (
    <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
     {products.map((product) => (
  <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
    <img
      src={product.image}
      alt={product.name}
      className="rounded-lg mb-4"
    />
    <h2 className="text-xl font-bold text-green-800">{product.name}</h2>
    <p className="text-green-700">Eco Score: {product.ecoScore} 🌿</p>
    <p className="text-gray-600">Carbon Impact: {product.carbonImpact} kg CO₂</p>
    <button
      onClick={() => addToCart(product)}
      className="mt-3 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
    >
      Add to Cart
    </button>

    <AlternativeSuggestion product={product} />
  </div>
))}

    </div>
  );
}
