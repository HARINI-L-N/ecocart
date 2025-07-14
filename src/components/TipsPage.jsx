import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function TipsPage() {
  const tips = [
    "🌿 Bring your own reusable bags instead of plastic.",
    "💧 Use refillable water bottles to reduce waste.",
    "🧼 Choose products with eco-friendly packaging.",
    "🚲 Walk, bike, or carpool to reduce your carbon footprint.",
    "🛒 Support local and ethical brands.",
    "♻️ Recycle and compost whenever possible.",
    "🌱 Choose organic and sustainably sourced items.",
    "💡 Turn off lights and unplug devices when not in use."
  ];

  return (
    <div className="min-h-screen bg-green-50 p-4">
      {/* <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoCart 🌿 - Sustainability Tips</h1>
        <Link to="/" className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded">
          Back to Products
        </Link>
      </header> */}
      <Navbar />


      <main className="max-w-2xl mx-auto mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-green-800 text-xl font-bold mb-4">🌿 Simple Ways to Shop Sustainably</h2>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="p-3 bg-green-100 rounded-lg text-green-800">
              {tip}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
