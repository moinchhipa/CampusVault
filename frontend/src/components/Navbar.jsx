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
    <nav
      className="sticky top-0 z-50 
                    bg-white/50 backdrop-blur-md 
                    border-b border-slate-200/60"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-2 min-w-0">
        {/* Logo */}
       <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight truncate min-w-0">
  <Link to="/home" className="hover:opacity-90 transition-all duration-300">
    <span className="text-slate-800">Campus</span>
    <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      Vault
    </span>
  </Link>
</h1>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-sm sm:text-base text-slate-600 hover:text-slate-900 transition-colors duration-200 flex gap-3 items-center justify-center"
              >
              <i class="fa-solid fa-right-to-bracket"></i> Login
              </Link>

              <Link
                to="/register"
                className="px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-xl
                bg-linear-to-r from-indigo-600 to-purple-600
                text-white shadow-md
                hover:shadow-lg
                transition-all duration-300 hover:-translate-y-0.5 flex gap-3 items-center justify-center"
              >
               <i class="fa-solid fa-user-plus"></i> Register
              </Link>
            </>
          ) : (
           <div onClick={() => navigate("/profile")}
  className="
    w-11 h-11 rounded-full
    bg-linear-to-br from-indigo-50 to-purple-50
    border border-indigo-100
    flex items-center justify-center
    shadow-sm
    cursor-pointer
    transition-all duration-300
    hover:shadow-md hover:scale-105
  "
>
  <lord-icon
    src="https://cdn.lordicon.com/kdduutaw.json"
    trigger="hover"
    colors="primary:#4f46e5,secondary:#7c3aed"
    style={{ width: "26px", height: "26px" }}
  ></lord-icon>
</div>

            // <button
            //   onClick={handleLogout}
            //   className="px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-xl
            //     bg-gradient-to-r from-indigo-600 to-purple-600
            //     text-white shadow-md cursor-pointer
            //     hover:shadow-lg
            //     transition-all duration-300 hover:-translate-y-0.5"
            // >
            //   Logout
            // </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
