import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-green-800 dark:text-green-300 text-xl font-bold mb-4">
          🌿 Simple Ways to Shop Sustainably
        </h2>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-3 bg-green-100 dark:bg-green-700 rounded-lg text-green-800 dark:text-green-200"
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </motion.main>
    </div>
  );
}
