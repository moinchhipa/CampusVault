import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UploadForm from "./components/UploadForm";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import MaterialsPage from "./components/MaterialsPage";
import PreviewPage from "./components/PreviewPage";
import Profile from "./components/Profile";
import AdminProfile from "./components/AdminProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <>
      <Navbar />
      <Toaster
        position="top-right"
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          duration: 2500,
          success: {
            style: {
              background: "linear-gradient(135deg,#ecfdf5,#ffffff)",
              color: "#065f46",
              borderRadius: "38px",
              padding: "10px",
              border: "1px solid #6ee7b7",
              boxShadow: "0 20px 40px -18px rgba(16,185,129,0.35)",
            },
          },
          error: {
            style: {
              background: "linear-gradient(135deg,#fef2f2,#ffffff)",
              color: "#991b1b",
              borderRadius: "38px",
              padding: "10px",
              border: "1px solid #fca5a5",
              boxShadow: "0 20px 40px -18px rgba(239,68,68,0.35)",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/show" element={<MaterialsPage />} />
        <Route path="/preview/:id" element={<PreviewPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadForm />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
