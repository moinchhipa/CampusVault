import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/axios";
import { Button } from "@/components/ui/button";
import MaterialCardUser from "./ui/MaterialCardUser";

const Profile = () => {
  const navigate = useNavigate();
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchUserMaterials = async () => {
      setLoading(true);
      try {
        // Fetch current user's profile/uploaded materials
        const res = await API.get("/user/usermaterial");
        setMaterials(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    const fetchUser = async () => {
      try {
        const res = await API.get("/auth/fetchuser");
        setUser(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUser();
    fetchUserMaterials();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] w-full min-w-0 overflow-x-hidden">
      {/* Background — match Home */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50 to-slate-100 -z-10" />

      {/* Soft ambient blobs */}
      <div className="absolute -top-40 -left-40 w-lg h-128 bg-indigo-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-lg h-128 bg-pink-400/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Content section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 box-border">
        <section
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-10
                     rounded-2xl sm:rounded-3xl lg:rounded-4xl
                     bg-white
                     shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.08)]
                     box-border"
        >
          <Button
            variant="ghost"
            className="mb-8 text-slate-500 cursor-pointer hover:text-slate-900"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-angle-left"></i> Back
          </Button>

          {/* Profile Section */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shrink-0">
                  <i className="fa-solid fa-user text-white text-2xl"></i>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                    {user?.username || "My Profile"}
                  </h1>
                  <p className="text-slate-500 text-base font-light">
                    {user?.email || ""}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="
                  self-start sm:self-auto
                  px-5 py-2.5 rounded-xl
                  bg-linear-to-r from-indigo-600 to-purple-600
                  text-white text-sm font-medium
                  hover:shadow-md hover:opacity-90
                  transition-all duration-300 cursor-pointer
                  flex items-center gap-2
                "
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
              </button>
            </div>

            <div className="mt-6 h-1 w-12 bg-indigo-600 rounded-full" />
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 mb-10" />

          {/* My Materials Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">
              My Uploads
            </h2>
            <p className="text-slate-500 text-base font-light">
              Materials you have uploaded.
            </p>
          </div>

          {loading ? (
            <div className="py-16 text-center">
              <p className="text-slate-500 text-lg">Loading materials...</p>
            </div>
          ) : materials.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-slate-500 text-lg">
                You haven't uploaded any materials yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((item) => (
                <MaterialCardUser
                  key={item._id}
                  material={item}
                  setMaterials={setMaterials}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;
