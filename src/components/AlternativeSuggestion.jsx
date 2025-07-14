import { products } from '../data/products';

export default function AlternativeSuggestion({ product }) {
  if (!product || !product.alternativeId) return null;

  const alternative = products.find(p => p.id === product.alternativeId);

  if (!alternative) return null;

  return (
    <div className="mt-4 p-3 border-t border-green-300 dark:border-green-700 bg-green-50 dark:bg-gray-800 rounded transition-colors duration-300">
      <h3 className="text-green-800 dark:text-green-300 font-bold mb-2">
        🌿 Eco-Friendly Alternative:
      </h3>
      <div className="flex items-center space-x-3">
        <img src={alternative.image} alt={alternative.name} className="w-16 h-16 rounded object-cover"/>
        <div>
          <p className="font-semibold text-green-700 dark:text-green-300">{alternative.name}</p>
          <p className="text-green-600 dark:text-green-400">Eco Score: {alternative.ecoScore} 🌿</p>
          <p className="text-green-500 dark:text-green-300 text-sm">Carbon Impact: {alternative.carbonImpact} kg CO₂</p>
        </div>
      </div>
    </div>
  );
}
