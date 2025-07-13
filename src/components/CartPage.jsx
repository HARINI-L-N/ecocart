import { Link } from 'react-router-dom';

export default function CartPage({ cart, setCart }) {
  // Calculate total carbon impact
  const totalCarbon = cart.reduce((sum, item) => sum + item.carbonImpact, 0).toFixed(2);

  // Remove item by index
  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <header className="bg-green-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">EcoCart 🌿 - Your Cart</h1>
        <Link to="/" className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded">
          Back to Products
        </Link>
      </header>

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
                  className="flex items-center justify-between border-b border-green-200 pb-2"
                >
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                    <div>
                      <p className="font-semibold text-green-800">{item.name}</p>
                      <p className="text-green-600 text-sm">Eco Score: {item.ecoScore} 🌿</p>
                      <p className="text-green-500 text-sm">Carbon Impact: {item.carbonImpact} kg CO₂</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-600 hover:text-red-800 text-sm font-semibold"
                  >
                    ❌ Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-green-100 rounded-lg text-green-800 font-semibold text-lg">
              🌿 Total Carbon Impact: {totalCarbon} kg CO₂
            </div>
          </>
        )}
      </main>
    </div>
  );
}
