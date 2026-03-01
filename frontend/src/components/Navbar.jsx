import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(localStorage.getItem("token"));

  // Re-check token whenever route changes
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 
                    bg-white/50 backdrop-blur-md 
                    border-b border-slate-200/60">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          <Link to="/" className="hover:text-indigo-600 transition-colors">
            CampusVault
          </Link>
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-xl
                bg-gradient-to-r from-indigo-600 to-purple-600
                text-white shadow-md
                hover:shadow-lg
                transition-all duration-300 hover:-translate-y-0.5"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl
                bg-gradient-to-r from-indigo-600 to-purple-600
                text-white shadow-md cursor-pointer
                hover:shadow-lg
                transition-all duration-300 hover:-translate-y-0.5"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;