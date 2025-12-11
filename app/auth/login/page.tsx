"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye,EyeOff,Mail,Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const [showPassword, setShowPassword] = useState({
  password: false,
  confirmPassword: false,
});
  const [errors, setErrors] = useState({});
  const router = useRouter();
  const fields = [
    { name: "email", label: "Email", type: "email", icon: Mail},
    { name: "password", label: "Password", type: showPassword.password ? "text" : "password" , icon: Lock,
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
    
    const savedData = JSON.parse(localStorage.getItem ("user"));
      
      if(!savedData){
     setErrors({ general: "No account found" });
      return;
     }
      if(savedData.email === form.email && savedData.password === form.password){
        router.push("/dashboard");
      }else{
        setErrors({ general: "incorrect email or password"});
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
      <h1 className="text-green-500 text-3xl font-semibold bg-gradient-primary-dark bg-clip-text text-transparent">Welcome 👋</h1>
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
        </div>
      ))}
        {errors.general && (
            <p className="text-red-500 text-sm">{errors.general}</p>
          )}
      </div>
       <div className="mt-4 flex gap-3 justify-center">
      <input 
      type="checkbox"
      />
      <label className="text-sm ">Remember me</label>
      <Link href="/auth/forgotPass" className="text-primary-light hover:underline text-right text-sm">Forget password?</Link>
      </div>
     <button
     type="submit"
     className="w-full py-4 bg-gradient-primary-dark shadow-lg rounded-2xl mt-4 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 text-white"
     >Log in</button>
         <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link href="/auth/register" className="text-primary-light font-semibold hover:underline">
              Sign up
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