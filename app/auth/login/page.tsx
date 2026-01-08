"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import Loader from "../../components/ui/loader";

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  /* ================= AUTO REDIRECT IF LOGGED IN ================= */
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const user = localStorage.getItem("user");

    if (user && isAuthenticated === "true") {
      router.replace("/dashboard");
    }
  }, [router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /* ================= LOGIN FLOW ================= */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const storedUser = localStorage.getItem("user");

    setTimeout(() => {
      if (!storedUser) {
        setError("No account found. Please register.");
        setLoading(false);
        return;
      }

      const user = JSON.parse(storedUser);

      if (user.email === form.email && user.password === form.password) {
        localStorage.setItem("isAuthenticated", "true");

        // ================= ADD LOGIN NOTIFICATION =================
        const key = `notifications_${user.email}`;
        const existing = JSON.parse(localStorage.getItem(key) || "[]");

        const newNotification = {
          id: Date.now(),
          title: "Login Successful",
          message: "You logged in successfully",
          read: false,
        };

        localStorage.setItem(
          key,
          JSON.stringify([newNotification, ...existing])
        );

        // ================= REDIRECT =================
        setRedirecting(true);

        setTimeout(() => {
          router.replace("/dashboard");
        }, 900);
      } else {
        setError("Incorrect email or password");
        setLoading(false);
      }
    }, 1000);
  }

  return (
    <>
      {/* ================= REDIRECT LOADER ================= */}
      {redirecting && <Loader />}

      <form
        onSubmit={handleSubmit}
        className="min-h-screen flex items-center justify-center bg-gradient-primary-dark px-5"
      >
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-center text-3xl font-semibold mb-6 bg-gradient-primary-dark text-transparent bg-clip-text">
            Welcome Back 👋
          </h1>

          {/* ================= EMAIL ================= */}
          <div className="relative mb-4">
            <Mail className="absolute left-4 top-4 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              disabled={loading || redirecting}
              className="pl-12 w-full py-3 rounded-xl border focus:ring-1 focus:ring-primary-bright disabled:opacity-60"
            />
          </div>

          {/* ================= PASSWORD ================= */}
          <div className="relative mb-4">
            <Lock className="absolute left-4 top-4 text-gray-400" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              disabled={loading || redirecting}
              className="pl-12 pr-12 w-full py-3 rounded-xl border focus:ring-1 focus:ring-primary-bright disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-500"
              disabled={loading || redirecting}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {/* ================= BUTTON ================= */}
          <button
            type="submit"
            disabled={loading || redirecting}
            className="w-full h-12 bg-gradient-primary-dark text-white rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* ================= SIGN UP ================= */}
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-primary-light font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}