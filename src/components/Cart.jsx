export default function Cart({ cart, onClose }) {
    return (
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
        <button
          onClick={onClose}
          className="text-green-800 font-bold mb-4 hover:underline"
        >
          Close Cart ✖️
        </button>
        <h2 className="text-2xl font-bold text-green-700 mb-4">🛒 Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-green-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 border-b border-green-200 pb-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded"
                />
                <div>
                  <p className="font-semibold text-green-800">{item.name}</p>
                  <p className="text-green-600 text-sm">Eco Score: {item.ecoScore} 🌿</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  