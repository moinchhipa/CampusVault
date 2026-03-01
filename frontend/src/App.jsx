import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UploadForm from "./components/UploadForm";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import MaterialsPage from "./components/MaterialsPage";
import PreviewPage from "./components/PreviewPage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50 w-full min-w-0 overflow-x-hidden">
        <Navbar />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            className: "animate-slide-in",
            style: {
              background: "#111",
              color: "#fff",
              borderRadius: "22px",
              padding: "14px 18px",
            },
          }}
        />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/show" element={<MaterialsPage />} />
          <Route path="/preview/:id" element={<PreviewPage />} />

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
      </div>
    </>
  );
}

export default App;
