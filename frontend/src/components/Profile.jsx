import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
       <Button
          variant="ghost"
          className="absolute top-24 left-2 text-slate-500 hover:text-slate-900"
          onClick={() => navigate(-1)}
        >
           <i className="fa-solid fa-angle-left"></i> Back
        </Button>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center space-y-6">
        
        <h2 className="text-2xl font-semibold text-slate-800">
          Profile
        </h2>

        <button
          onClick={handleLogout}
          className="
            w-full py-2 rounded-xl
            bg-linear-to-r from-indigo-600 to-purple-600
            text-white
            hover:shadow-md
            transition-all duration-300
          "
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Profile;