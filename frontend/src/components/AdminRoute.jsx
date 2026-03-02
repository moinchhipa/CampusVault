import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../api/axios";

const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await API.get("/auth/fetchuser");
        setIsAdmin(res.data.role === "admin");
      } catch (e) {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  if (isAdmin === null) return null; // loading

  return isAdmin ? children : <Navigate to="/home" replace />;
};

export default AdminRoute;