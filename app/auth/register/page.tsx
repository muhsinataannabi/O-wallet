"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import Link from "next/link";
import AuthRedirectLoader from "../../components/auth/authRedirectLoader";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const fields = [
    { name: "fullname", label: "Full Name", type: "text", placeholder: "Ahmad Isah", icon: User },
    { name: "userName", label: "Username", type: "text", placeholder: "Guyson", icon: User },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com", icon: Mail },
    { name: "phoneNum", label: "Phone Number", type: "tel", placeholder: "+234 801 234 5678", icon: Phone },
    {
      name: "password",
      label: "Password",
      type: showPassword.password ? "text" : "password",
      placeholder: "••••••••",
      icon: Lock,
      isPassword: true,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: showPassword.confirmPassword ? "text" : "password",
      placeholder: "••••••••",
      icon: Lock,
      isPassword: true,
    },
  ];
  
  useEffect(() => {
  localStorage.removeItem("isAuthenticated");
}, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors: Record<string, string> = {};

    if (!form.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!form.userName.trim()) newErrors.userName = "Username is required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email format";
    if (form.phoneNum.length < 10) newErrors.phoneNum = "Phone number must be 10+ digits";
    if (form.password.length < 6) newErrors.password = "Minimum 6 characters";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // simulate API delay
    setTimeout(() => {
      const userData = {
        email: form.email,
        password: form.password,
        fullname: form.fullname,
        phoneNum: form.phoneNum,
        username: form.userName,
      };

      localStorage.removeItem("isAuthenticated"); // make 100% sure
localStorage.setItem("user", JSON.stringify(userData));

      setRedirecting(true);

      setTimeout(() => {
        router.replace("/auth/login");
      }, 900);
    }, 1000);
  }

  return (
    <>
      {/* ================= REDIRECT LOADER ================= */}
      {redirecting && <AuthRedirectLoader />}

      <form
        onSubmit={handleSubmit}
        className="p-5 flex items-center justify-center min-h-screen bg-gradient-primary-dark"
      >
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
              <h1 className="text-4xl font-semibold bg-gradient-primary-dark bg-clip-text text-transparent">
                Create Account
              </h1>
            </div>

            <div className="space-y-6">
              {fields.map((field) => (
                <div key={field.name} className="relative">
                  <field.icon className="absolute left-4 top-5 h-5 w-5 text-gray-400" />

                  <input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={(form as any)[field.name]}
                    onChange={handleChange}
                    disabled={loading || redirecting}
                    className="pl-12 border bg-gray-50 rounded-2xl focus:outline-none w-full pr-4 py-4 border-gray-200 focus:ring-1 focus:ring-primary-bright disabled:opacity-60"
                  />

                  {field.isPassword && (
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((prev) => ({
                          ...prev,
                          [field.name]: !prev[field.name as "password" | "confirmPassword"],
                        }))
                      }
                      className="absolute right-4 top-5 text-gray-700"
                      disabled={loading || redirecting}
                    >
                      {showPassword[field.name as "password" | "confirmPassword"] ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  )}

                  <label className="absolute -top-3 left-10 bg-white px-2 text-sm font-medium text-gray-600">
                    {field.label}
                  </label>

                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}
            </div>

            {/* ================= BUTTON ================= */}
            <button
              type="submit"
              disabled={loading || redirecting}
              className="w-full h-12 mt-6 bg-gradient-primary-dark shadow-lg rounded-2xl text-white flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-primary-light font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-neutral-soft">© 2025 O-wallet. All rights reserved.</p>
          </div>
        </div>
      </form>
    </>
  );
}