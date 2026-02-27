import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    toast.success("Registered successfully!");
     
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Register
          </button>
        </form>
           
           <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login"
            className="text-black font-medium hover:underline">
              Login
            </Link>
           </div>
      </div>
    </div>
  );
};

export default Register;