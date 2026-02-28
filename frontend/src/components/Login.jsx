import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
      toast.success("Login successful!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">
  <Card className="w-full max-w-md shadow-2xl relative">
    
    {/* Back Button */}
    <Button
      variant="ghost"
      className="absolute top-4 left-4"
      onClick={() => navigate(-1)}
    >
      ← Back
    </Button>

    <CardHeader>
      <CardTitle className="text-3xl text-center font-semibold tracking-tight">
        Welcome Back
      </CardTitle>
    </CardHeader>

    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Email */}
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full py-6 text-base">
          Login
        </Button>

      </form>

      {/* Register Link */}
      <div className="text-center text-sm text-muted-foreground mt-6">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-foreground hover:underline"
        >
          Register
        </Link>
      </div>
    </CardContent>
  </Card>
</div>
  );
};

export default Login;
