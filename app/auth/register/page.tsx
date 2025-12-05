"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye,EyeOff,User,Mail,Phone,Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmPassword: "",
  });
const [showPassword, setShowPassword] = useState({
  password: false,
  confirmPassword: false,
});
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const fields = [
    { name: "fullname", label: "Full Name", type: "text", placeholder: "Ahmad Isah", icon: User},
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", icon: Mail},
    { name: "phoneNum", label: "Phone Number", type: "number", placeholder: "+234 801 234 5678", icon: Phone },
    { name: "password", label: "Password", type: showPassword.password ? "text" : "password" , placeholder: "••••••••", icon: Lock,
      isPassword: true,
    },
    { name: "confirmPassword", label: "Confirm Password", type: showPassword.password ? "text" : "password", placeholder: "••••••••", icon: Lock ,
      isPassword: true,
    },
  ];

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {};

    if (!form.fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (form.phoneNum.length < 10){
      newErrors.phoneNum = "phone number must be 10+ digits"
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      const userData = {
        email: form.email,
        password: form.password
      };
      localStorage.setItem("user", JSON.stringify(userData));
    router.push("/auth/login");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 flex items-center justify-center min-h-screen bg-gradient-primary-dark">
      <div className="w-full max-w-md">
      <div className="rounded-3xl shadow-2xl border border-white/20 p-8 bg-white">
        <div className="text-center mb-8">
          <div className="flex justify-center pb-4">
          <img 
          src="/logo.svg"
          width={40}
          height={40}
          alt="logo"
          className="rounded-full shadow-lg"
          />
          </div>
      <h1 className="text-green-500 text-4xl font-semibold bg-gradient-primary-dark bg-clip-text text-transparent">Create Account</h1>
      </div>
      <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="relative">
          <field.icon className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
          <input
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            className="pl-12 border bg-gray-50 rounded-2xl focus:outline-none w-full pr-4 py-4 border-gray-200 focus:ring-1 focus:ring-primary-bright focus-bg-white transition-all duration-300 placeholder-gray-400"
          />
       {field.isPassword && (
      <button
        type="button"
        onClick={() =>
          setShowPassword((prev) => ({
            ...prev,
            [field.name]: !prev[field.name],
          }))
        }
        className="absolute right-4 top-5 text-gray-700 hover:text-gray-700 transition"
      >
        {showPassword[field.name] ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
    )}
   <label className="absolute -top-3 left-10 bg-white px-2 text-sm font-medium text-gray-600">{field.label}:</label>
   
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}
      </div>
     <button
     type="submit"
     className="w-full py-4 bg-gradient-primary-dark shadow-lg rounded-2xl mt-4 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-white"
     >Create Account</button>
         <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary-light font-semibold hover:underline">
              Sign in
            </Link>
          </p>
      </div>
      <div className="text-center mt-6">
          <p className="text-xs text-neutral-soft">© 2025 O-wallet. All rights reserved.</p>
        </div>
      </div>
    </form>
  );
}