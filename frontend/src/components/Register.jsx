import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await API.post("/auth/register", form);
      
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (e) {
      console.log(e)
    }

    toast.success("Registered successfully!");
     
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                bg-linear-to-br from-white via-slate-50 to-slate-100 
                p-2 sm:p-6 relative overflow-hidden">

  {/* Soft ambient background */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

  <Card className="w-full max-w-md 
                   bg-white/80 backdrop-blur-md
                   border border-slate-200
                   shadow-xl rounded-2xl relative z-10">

    {/* Back Button */}
    <Button
      variant="ghost"
      className="absolute top-4 left-4 text-slate-500 hover:text-slate-900 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <i class="fa-solid fa-angle-left"></i> Back
    </Button>

    <CardHeader className="pt-10">
      <CardTitle className="text-3xl text-center font-semibold tracking-tight text-slate-900">
        Create Account
      </CardTitle>
      <p className="text-center text-slate-500 text-sm mt-2">
        Join CampusVault to manage academic resources efficiently.
      </p>
    </CardHeader>

    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Username */}
        <div className="space-y-2">
          <Label className="text-slate-700">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
            className="h-11 rounded-lg border-slate-200 focus-visible:ring-2 
           focus-visible:ring-indigo-500/50 
           focus-visible:border-indigo-500
           focus-visible:outline-none"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-slate-700">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            className="h-11 rounded-lg border-slate-200 focus-visible:ring-2 
           focus-visible:ring-indigo-500/50 
           focus-visible:border-indigo-500
           focus-visible:outline-none"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label className="text-slate-700">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Create password"
            onChange={handleChange}
            className="h-11 rounded-lg border-slate-200 focus-visible:ring-2 
           focus-visible:ring-indigo-500/50 
           focus-visible:border-indigo-500
           focus-visible:outline-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full py-6 text-base rounded-xl
                     bg-linear-to-r from-indigo-600 to-purple-600
                     hover:from-indigo-700 hover:to-purple-700
                     text-white shadow-md hover:shadow-lg
                     transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-4 
           focus-visible:ring-indigo-500/30 
           focus-visible:border-indigo-500
           focus-visible:outline-none cursor-pointer"
        >
          <i class="fa-solid fa-user-plus"></i> Register
        </Button>

      </form>

      {/* Login Redirect */}
      <div className="text-center text-sm text-slate-500 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:underline"
        >
          Login
        </Link>
      </div>
    </CardContent>
  </Card>
</div>
  );
};

export default Register;