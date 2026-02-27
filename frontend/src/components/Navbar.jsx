import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          <Link to="/">CampusVault</Link>
        </h1>

        <div className="space-x-6">
          <Link
            to="/login"
            className="text-gray-600 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Register
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
