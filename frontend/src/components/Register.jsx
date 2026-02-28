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
        Create Account
      </CardTitle>
    </CardHeader>

    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Username */}
        <div className="space-y-2">
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Create password"
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full py-6 text-base">
          Register
        </Button>

      </form>

      {/* Login Redirect */}
      <div className="text-center text-sm text-muted-foreground mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-foreground hover:underline"
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