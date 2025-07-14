import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<header className="bg-green-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">EcoCart 🌿</h1>
      <div className="flex space-x-2">
        <Link to="/" className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded">
          Products
        </Link>
        <Link to="/cart" className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded">
          View Cart
        </Link>
        <Link to="/tips" className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded">
          🌿 Tips
        </Link>
      </div>
    </header>
  );
}
